import { EventBridgeEvent } from "aws-lambda";
import { getRepository } from "typeorm";
import { HelloAssoForm } from "../types";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { Event } from "../entities/Event";
import { mapHelloAssoFormToEvent } from "../utils/helloAsso/mappers/mapHelloAssoEventToEvent";
import { createMailingListsForEvents } from "../services/events/mutations/createMailingListsForEvents";
import { saveSingleEntity } from "../utils/saveUtils";

const shouldProcessEvent = (eventType: "newEvent" | string) => {
  if (eventType === "newEvent") {
    return true;
  }
  return false;
};

export const handler = async (event: EventBridgeEvent<"newEvent" | string, HelloAssoForm>) => {
  console.log("Event received: ", JSON.stringify(event));
  if (!shouldProcessEvent(event["detail-type"])) {
    console.log(`Cannot process eventType: ${event["detail-type"]}`);
    return;
  }
  try {
    await openConnectionToDb();
    const upsertedEvent = await saveSingleEntity(mapHelloAssoFormToEvent(event.detail), getRepository(Event), "slug");
    await createMailingListsForEvents([upsertedEvent]);
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};
