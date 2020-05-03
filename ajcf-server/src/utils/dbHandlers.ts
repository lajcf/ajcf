import { createConnection, getConnection } from "typeorm";
import { Member } from "../entities/Member";
import { Event } from "../entities/Event";
import { fetchAwsSecret } from "./fetchAwsSecret";

export interface DBCredentials {
  username: string;
  engine: "mysql";
  host: string;
  password: string;
  port: number;
  dbname: string;
}

export const fetchDbCredentials = async (isProd?: boolean) => {
  const SecretId = isProd ? "ajcf-server-prod-db-credentials" : "ajcf-server-dev-db-credentials"; // secrets stored in AWS Secret
  return fetchAwsSecret<DBCredentials>(SecretId);
};

export const openConnectionToDb = async () => {
  const credentials = await fetchDbCredentials(process.env.STAGE === "prod");
  console.log(`DB_CONNECTION :: Opening connection to database in ${process.env.STAGE}`);
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
