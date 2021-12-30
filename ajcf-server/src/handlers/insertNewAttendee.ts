import { EventBridgeEvent } from "aws-lambda";
import { uniqBy } from "lodash";
import { getRepository } from "typeorm";
import { HelloAssoOrder } from "../types";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { upsertAttendees } from "../services/attendees/mutations/upsertAttendees";
import { formatOrderToAttendees } from "../utils/helloAsso/mappers/mapHelloAssoItemToAttendee";
import { addContactsToMailingList } from "../utils/mailClient/sendInBlue/addContactsToMailingList/addContactsToMailingList";
import { Event } from "../entities/Event";
import { upsertTickets } from "../services/tickets/upsertTickets";
import { formatOrderToTickets } from "../utils/helloAsso/mappers/mapHelloAssoItemToTicket";
import { updateEvent } from "../services/events/mutations/updateEvent";

const shouldProcessEvent = (eventType: "newMember" | "newAttendee" | string) => {
  if (eventType === "newAttendee") {
    return true;
  }
  return false;
};

export const handler = async (event: EventBridgeEvent<"newMember" | "newAttendee" | string, HelloAssoOrder>) => {
  console.log("Event received: ", JSON.stringify(event));
  if (!shouldProcessEvent(event["detail-type"])) {
    console.log(`Cannot process eventType: ${event["detail-type"]}`);
    return;
  }
  try {
    await openConnectionToDb();
    const upsertedAttendees = await upsertAttendees(formatOrderToAttendees(event.detail));
    const ajcfEvent = await getRepository(Event).findOneOrFail({ slug: event.detail.formSlug });
    const upsertedTickets = await upsertTickets(formatOrderToTickets(event.detail, ajcfEvent, upsertedAttendees));
    await updateEvent({
      ...ajcfEvent,
      tickets: upsertedTickets,
    });
    await addContactsToMailingList({
      contactsToAdd: uniqBy(upsertedAttendees, (attendee) => attendee.email),
      listId: ajcfEvent.mailjetListId,
    });
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};
