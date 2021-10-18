/* eslint-disable no-template-curly-in-string */
import { Serverless } from "serverless/aws";

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
      ENV: "${self:provider.stage}",
      STAGE: "${self:provider.stage}",
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
      TEMPLATE_SUBSCRIPTION_REMINDER_ID: "${env:TEMPLATE_SUBSCRIPTION_REMINDER_ID}",
      TEMPLATE_WELCOME_ID: "${env:TEMPLATE_WELCOME_ID}",
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
    updateMembers: {
      handler: "src/handlers/updateMembers.handler",
      events: [
        {
          schedule: "rate(1 hour)",
        },
      ],
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
  },
};

module.exports = serverlessConfig;
