/* eslint-disable no-template-curly-in-string */
import { Serverless } from "serverless/aws";

const serverlessConfig: Serverless = {
  service: "ajcf-server",
  frameworkVersion: ">=2.0.0 <3.0.0",
  plugins: ["serverless-webpack"],
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
      BEARER_SECRET_KEY: "${env:BEARER_SECRET_KEY, file(./env.js):env.BEARER_SECRET_KEY}",
      GOOGLE_DRIVE_DB_FOLDER_ID: "${env:GOOGLE_DRIVE_DB_FOLDER_ID, file(./env.js):env.GOOGLE_DRIVE_DB_FOLDER_ID}",
      GOOGLE_SHEET_API_BEARER_KEY: "${env:GOOGLE_SHEET_API_BEARER_KEY, file(./env.js):env.GOOGLE_SHEET_API_BEARER_KEY}",
      GOOGLE_SHEET_MEMBERS_ID: "${env:GOOGLE_SHEET_MEMBERS_ID, file(./env.js):env.GOOGLE_SHEET_MEMBERS_ID}",
      GOOGLE_DRIVE_API_BEARER_KEY: "${env:GOOGLE_DRIVE_API_BEARER_KEY, file(./env.js):env.GOOGLE_DRIVE_API_BEARER_KEY}",
      GOOGLE_SHEET_LOOKUP: "${env:GOOGLE_SHEET_LOOKUP, file(./env.js):env.GOOGLE_SHEET_LOOKUP}",
      DB_HOST: "${env:DB_HOST, file(./env.js):env.DB_HOST}",
      DB_PASSWORD: "${env:DB_PASSWORD, file(./env.js):env.DB_PASSWORD}",
      DB_USERNAME: "${env:DB_USERNAME, file(./env.js):env.DB_USERNAME}",
      DB_PORT: "${env:DB_PORT, file(./env.js):env.DB_PORT}",
      DB_NAME_PROD: "${env:DB_NAME_PROD, file(./env.js):env.DB_NAME_PROD}",
      DB_NAME_DEV: "${env:DB_NAME_DEV, file(./env.js):env.DB_NAME_DEV}",
      MAILJET_API_KEY: "${env:MAILJET_API_KEY, file(./env.js):env.MAILJET_API_KEY}",
      MAILJET_API_SECRET: "${env:MAILJET_API_SECRET, file(./env.js):env.MAILJET_API_SECRET}",
      HELLOASSO_USERNAME: "${env:USER_AJCF, file(./env.js):env.HELLOASSO_USERNAME}",
      HELLOASSO_PASSWORD: "${env:PASSWORD_AJCF, file(./env.js):env.HELLOASSO_PASSWORD}",
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
  },
};

module.exports = serverlessConfig;
