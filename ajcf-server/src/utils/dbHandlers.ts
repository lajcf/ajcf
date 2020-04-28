import * as AWS from "aws-sdk";
import memoizeOne from "memoize-one";
import { createConnection, getConnection } from "typeorm";
import { Member } from "../entities/Member";
import { Event } from "../entities/Event";

export interface DBCredentials {
  username: string;
  engine: "mysql";
  host: string;
  password: string;
  port: number;
  dbname: string;
}

const secretManager = new AWS.SecretsManager({
  region: "eu-west-3",
});

export const memoizedSecret = memoizeOne((SecretId: string) =>
  secretManager.getSecretValue({ SecretId }).promise()
);

export const fetchAwsSecret = async <T>(secretId: string) => {
  const data = await memoizedSecret(secretId);
  if (data.SecretString) {
    return JSON.parse(data.SecretString) as T;
  }
  throw new Error(`${secretId} not found`);
};

export const fetchDbCredentials = async (
  isProd?: boolean,
  localCredentials?: boolean
) => {
  if (localCredentials)
    AWS.config.credentials = new AWS.SharedIniFileCredentials({
      profile: "ajcf",
    });
  const SecretId = isProd
    ? "ajcf-server-prod-db-credentials"
    : "ajcf-server-dev-db-credentials"; // secrets stored in AWS Secret
  return fetchAwsSecret<DBCredentials>(SecretId);
};

export const openConnectionToDb = async () => {
  const credentials = await fetchDbCredentials(process.env.STAGE === "prod");
  console.log(
    `DB_CONNECTION :: Opening connection to database in ${process.env.STAGE}`
  );
  try {
    await createConnection({
      type: credentials.engine,
      host: credentials.host,
      port: credentials.port,
      username: credentials.username,
      password: credentials.password,
      database: credentials.dbname,
      entities: [Member, Event],
      migrations: ["../migrations/*.ts"],
      synchronize: false,
      logging: false,
      charset: "utf8mb4_unicode_ci",
    });
    console.log("DB_CONNECTION :: Connection open");
  } catch (e) {
    console.log("DB_CONNECTION :: ", e);
    console.log("DB_CONNECTION :: Connection already open");
    await getConnection();
  }
};

export const closeConnectionToDb = async () => {
  console.log("DB_CONNECTION :: Closing connection to DB");
  const connection = await getConnection();
  await connection.close();
  console.log("DB_CONNECTION :: Connection closed");
};
