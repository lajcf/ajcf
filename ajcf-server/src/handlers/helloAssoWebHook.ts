import { getRepository } from "typeorm";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { HelloAssoNotification } from "../entities/HelloAssoNotification";

type HelloAssoNotificationRequestBody = {
  eventType: "Order" | "Payment" | "Form";
  data: object;
};

const saveEvent = async (body: HelloAssoNotificationRequestBody) => {
  try {
    await openConnectionToDb();
    await getRepository(HelloAssoNotification).save({ data: body.data, notificationType: body.eventType });
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};

export const handler = async (event: any) => {
  console.log("Event received: ", event);
  const data: HelloAssoNotificationRequestBody = JSON.parse(event.body);
  console.log("Body parsed: ", data);
  await saveEvent(data);
};
