import * as AWS from "aws-sdk";
import memoizeOne from "memoize-one";

const secretManager = new AWS.SecretsManager({
  region: "eu-west-3",
});

export const memoizedSecret = memoizeOne((SecretId: string) => secretManager.getSecretValue({ SecretId }).promise());

export const fetchAwsSecret = async <T>(secretId: string) => {
  // @ts-ignore
  if (secretManager.config.credentials?.profile !== "ajcf") {
    secretManager.config.credentials = new AWS.SharedIniFileCredentials({
      profile: "ajcf",
    });
  }
  const data = await memoizedSecret(secretId);
  if (data.SecretString) {
    return JSON.parse(data.SecretString) as T;
  }
  throw new Error(`${secretId} not found`);
};
