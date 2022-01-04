import { getRepository } from "typeorm";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { HelloAssoNotification } from "../entities/HelloAssoNotification";
import { publishEvent } from "../utils/pubsub";
import {
  HelloAssoForm,
  HelloAssoOrder,
  mapHelloAssoFormFormTypeToEventBridgeDetailType,
  mapHelloAssoOrderFormTypeToEventBridgeDetailType,
} from "../types";

type HelloAssoNotificationRequestBody =
  | { eventType: "Order"; data: HelloAssoOrder }
  | {
      eventType: "Form";
      data: HelloAssoForm;
    }
  | {
      eventType: "Payment";
      data: any;
    };

const publishHelloAssoNotification = async (body: HelloAssoNotificationRequestBody) => {
  switch (body.eventType) {
    case "Form":
      return publishEvent({
        source: "helloasso.form",
        detail: body.data,
        detailType: mapHelloAssoFormFormTypeToEventBridgeDetailType[body.data.formType] || body.data.formType,
      });
    case "Order":
      return publishEvent({
        source: "helloasso.order",
        detail: body.data,
        detailType: mapHelloAssoOrderFormTypeToEventBridgeDetailType[body.data.formType] || body.data.formType,
      });
    default:
      console.log("Do not publish payment event");
  }
};

const saveEvent = async (body: HelloAssoNotificationRequestBody) => {
  try {
    await openConnectionToDb();
    await getRepository(HelloAssoNotification).save({ data: body.data, notificationType: body.eventType });
    console.log("Saved event");
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};

const sanityCheck = (body: Partial<HelloAssoNotificationRequestBody>) => {
  if (!body.eventType) {
    throw new Error("No eventType in body");
  }
  if (!["Order", "Payment", "Form"].includes(body.eventType)) {
    throw new Error("eventType incorrect");
  }
  if (!body.data) {
    throw new Error("No data in body");
  }
};

export const handler = async (event: any) => {
  if (process.env.ENV !== "prod") {
    console.log("Dev, do nothing");
    return;
  }
  console.log("Event received: ", event);
  const data: HelloAssoNotificationRequestBody = JSON.parse(event.body);
  console.log("Body parsed: ", data);
  sanityCheck(data);
  await saveEvent(data);
  await publishHelloAssoNotification(data);
  return {
    body: JSON.stringify({ message: "ok" }),
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: "200",
  };
};
