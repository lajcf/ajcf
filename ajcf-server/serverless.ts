/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line import/no-import-module-exports
import { Serverless } from "serverless/aws";

export const environmentVariables: typeof process.env = {
  ENV: "${env:ENV}",
  STAGE: "${env:STAGE}",
  DB_HOST: "${env:DB_HOST}",
  DB_PASSWORD: "${env:DB_PASSWORD}",
  DB_USERNAME: "${env:DB_USERNAME}",
  DB_PORT: "${env:DB_PORT}",
  DB_NAME: "${env:DB_NAME}",
  SENDINBLUE_API_KEY: "${env:SENDINBLUE_API_KEY}",
  HELLOASSO_USERNAME: "${env:HELLOASSO_USERNAME}",
  HELLOASSO_PASSWORD: "${env:HELLOASSO_PASSWORD}",
  HELLOASSO_V5_CLIENT_ID: "${env:HELLOASSO_V5_CLIENT_ID}",
  HELLOASSO_V5_CLIENT_SECRET: "${env:HELLOASSO_V5_CLIENT_SECRET}",
  SEND_IN_BLUE_TEMPLATE_SUBSCRIPTION_REMINDER_ID: "${env:SEND_IN_BLUE_TEMPLATE_SUBSCRIPTION_REMINDER_ID}",
  SEND_IN_BLUE_TEMPLATE_WELCOME_ID: "${env:SEND_IN_BLUE_TEMPLATE_WELCOME_ID}",
  SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID: "${env:SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID}",
};

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
    stage: "${env:STAGE}",
    region: "eu-west-3",
    environment: environmentVariables,
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
      {
        Effect: "Allow",
        Action: ["events:*"],
        Resource: ["*"],
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
          TopicName: "LambdaErrorTopic-${self:provider.stage}",
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
              Value: "ajcf-server-${self:provider.stage}-helloAssoWebHook",
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
              Value: "ajcf-server-${self:provider.stage}-updateMembers",
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
              Value: "ajcf-server-${self:provider.stage}-updateEvents",
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
              Value: "ajcf-server-${self:provider.stage}-sendSubscriptionReminders",
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
