import { createConnection, getConnection } from "typeorm";
import { Member } from "../entities/Member";
import { Event } from "../entities/Event";
import { Ticket } from "../entities/Ticket";
import { Attendee } from "../entities/Attendee";
import { Activity } from "../entities/Activity";
import { HelloAssoNotification } from "../entities/HelloAssoNotification";

export const openConnectionToDb = async () => {
  console.log("DB_CONNECTION :: Fetched credentials...");
  console.log(`DB_CONNECTION :: Opening connection to database in ${process.env.STAGE}`);
  try {
    await createConnection({
      type: "mysql",
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USERNAME!,
      password: process.env.DB_PASSWORD!,
      database: process.env.ENV === "prod" ? process.env.DB_NAME_PROD! : process.env.DB_NAME_DEV!,
      entities: [Member, Event, Ticket, Attendee, Activity, HelloAssoNotification],
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
