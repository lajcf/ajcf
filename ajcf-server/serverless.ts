/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line import/no-import-module-exports
import { Serverless } from "serverless/aws";

const STAGE = "${self:provider.stage}";

const serverlessConfig: Serverless = {
  service: "ajcf-server",
  frameworkVersion: ">=2.0.0 <3.0.0",
  plugins: ["serverless-webpack"],
  useDotenv: true,
  unresolvedVariablesNotificationMode: "error",
  custom: {
    webpack: {
      webpackConfig: "webpack.config.js",
      includeModules: {
        forceExclude: ["aws-sdk"],
      },
      packager: "yarn",
    },
  },
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "${opt:stage, 'dev'}",
    region: "eu-west-3",
    profile: "ajcf",
    environment: {
      ENV: STAGE,
      STAGE,
      DB_HOST: "${env:DB_HOST}",
      DB_PASSWORD: "${env:DB_PASSWORD}",
      DB_USERNAME: "${env:DB_USERNAME}",
      DB_PORT: "${env:DB_PORT}",
      DB_NAME_PROD: "${env:DB_NAME_PROD}",
      DB_NAME_DEV: "${env:DB_NAME_DEV}",
      SENDINBLUE_API_KEY: "${env:SENDINBLUE_API_KEY}",
      MAILJET_API_KEY: "${env:MAILJET_API_KEY}",
      MAILJET_API_SECRET: "${env:MAILJET_API_SECRET}",
      HELLOASSO_USERNAME: "${env:HELLOASSO_USERNAME}",
      HELLOASSO_PASSWORD: "${env:HELLOASSO_PASSWORD}",
      HELLOASSO_V5_CLIENT_ID: "${env:HELLOASSO_V5_CLIENT_ID}",
      HELLOASSO_V5_CLIENT_SECRET: "${env:HELLOASSO_V5_CLIENT_SECRET}",
      SEND_IN_BLUE_TEMPLATE_SUBSCRIPTION_REMINDER_ID: "${env:SEND_IN_BLUE_TEMPLATE_SUBSCRIPTION_REMINDER_ID}",
      SEND_IN_BLUE_TEMPLATE_WELCOME_ID: "${env:SEND_IN_BLUE_TEMPLATE_WELCOME_ID}",
      SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID: "${env:SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID}",
    },
    memorySize: 3008,
    logRetentionInDays: 30,
    timeout: 300,
    apiGateway: {
      minimumCompressionSize: 4096,
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["secretsmanager:GetSecretValue"],
        Resource: ["arn:aws:secretsmanager:eu-west-3:071879949813:secret:*"],
      },
    ],
  },
  functions: {
    insertNewMember: {
      handler: "src/handlers/insertNewMember.handler",
      // @ts-ignore
      maximumRetryAttempts: 1,
      events: [
        {
          eventBridge: {
            eventBus: `ajcf-server-bus-${STAGE}`,
            pattern: {
              source: ["helloasso.order"],
            },
          },
        },
      ],
    },
    insertNewEvent: {
      handler: "src/handlers/insertNewEvent.handler",
      // @ts-ignore
      maximumRetryAttempts: 1,
      events: [
        {
          eventBridge: {
            eventBus: `ajcf-server-bus-${STAGE}`,
            pattern: {
              source: ["helloasso.form"],
            },
          },
        },
      ],
    },
    insertNewAttendee: {
      handler: "src/handlers/insertNewAttendee.handler",
      // @ts-ignore
      maximumRetryAttempts: 1,
      events: [
        {
          eventBridge: {
            eventBus: `ajcf-server-bus-${STAGE}`,
            pattern: {
              source: ["helloasso.order"],
            },
          },
        },
      ],
    },
    updateMembers: {
      handler: "src/handlers/updateMembers.handler",
    },
    updateEvents: {
      handler: "src/handlers/updateEvents.handler",
      events: [
        {
          schedule: "rate(1 day)",
        },
      ],
    },
    sendSubscriptionReminders: {
      handler: "src/handlers/sendSubscriptionReminders.handler",
      events: [
        {
          schedule: "rate(1 day)",
        },
      ],
    },
    helloAssoWebHook: {
      handler: "src/handlers/helloAssoWebHook.handler",
      reservedConcurrency: 5,
      events: [
        {
          http: {
            method: "post",
            path: "notification",
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      // Send an email on error
      LambdaErrorTopic: {
        Properties: {
          TopicName: `LambdaErrorTopic-${STAGE}`,
        },
        Type: "AWS::SNS::Topic",
      },
      TopicCloudwatchAlarmSubscription1: {
        Properties: {
          Endpoint: "nicolas.li@hotmail.fr",
          Protocol: "email",
          TopicArn: { Ref: "LambdaErrorTopic" },
        },
        Type: "AWS::SNS::Subscription",
      },
      ErrorAlarmHelloAssoWebHook: {
        Properties: {
          AlarmActions: [{ Ref: "LambdaErrorTopic" }],
          AlarmDescription: `Error on helloAssoWebHook`,
          ComparisonOperator: "GreaterThanOrEqualToThreshold",
          Dimensions: [
            {
              Name: "FunctionName",
              Value: `ajcf-server-${STAGE}-helloAssoWebHook`,
            },
          ],
          EvaluationPeriods: 1,
          MetricName: "Errors",
          Namespace: "AWS/Lambda",
          Period: 60,
          Statistic: "Maximum",
          Threshold: 1,
        },
        Type: "AWS::CloudWatch::Alarm",
      },
      ErrorAlarmUpdateMembers: {
        Properties: {
          AlarmActions: [{ Ref: "LambdaErrorTopic" }],
          AlarmDescription: `Error on updateMembers`,
          ComparisonOperator: "GreaterThanOrEqualToThreshold",
          Dimensions: [
            {
              Name: "FunctionName",
              Value: `ajcf-server-${STAGE}-updateMembers`,
            },
          ],
          EvaluationPeriods: 1,
          MetricName: "Errors",
          Namespace: "AWS/Lambda",
          Period: 60,
          Statistic: "Maximum",
          Threshold: 1,
        },
        Type: "AWS::CloudWatch::Alarm",
      },
      ErrorAlarmUpdateEvents: {
        Properties: {
          AlarmActions: [{ Ref: "LambdaErrorTopic" }],
          AlarmDescription: `Error on updateEvents`,
          ComparisonOperator: "GreaterThanOrEqualToThreshold",
          Dimensions: [
            {
              Name: "FunctionName",
              Value: `ajcf-server-${STAGE}-updateEvents`,
            },
          ],
          EvaluationPeriods: 1,
          MetricName: "Errors",
          Namespace: "AWS/Lambda",
          Period: 60,
          Statistic: "Maximum",
          Threshold: 1,
        },
        Type: "AWS::CloudWatch::Alarm",
      },
      ErrorAlarmSendSubscriptionReminders: {
        Properties: {
          AlarmActions: [{ Ref: "LambdaErrorTopic" }],
          AlarmDescription: `Error on sendSubscriptionReminders`,
          ComparisonOperator: "GreaterThanOrEqualToThreshold",
          Dimensions: [
            {
              Name: "FunctionName",
              Value: `ajcf-server-${STAGE}-sendSubscriptionReminders`,
            },
          ],
          EvaluationPeriods: 1,
          MetricName: "Errors",
          Namespace: "AWS/Lambda",
          Period: 60,
          Statistic: "Maximum",
          Threshold: 1,
        },
        Type: "AWS::CloudWatch::Alarm",
      },
    },
  },
};

module.exports = serverlessConfig;
