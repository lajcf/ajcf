import waait from "waait";
import { uniq, uniqBy } from "lodash";
import { Event } from "../../../entities/Event";
import { limit } from "../../../utils/pLimit";
import { upsertAttendees } from "./upsertAttendees";
import { updateEvent } from "../../events/mutations/updateEvent";
import { upsertTickets } from "../../tickets/upsertTickets";
import { formatTicketToAttendee } from "../../helloAsso/v5/mappers/mapHelloAssoItemToAttendee";
import { formatHelloAssoTicketToTicket } from "../../helloAsso/v5/mappers/mapHelloAssoItemToTicket";
import { Attendee } from "../../../entities/Attendee";
import { fetchEventHelloAssoTickets } from "../../helloAsso/v5/fetchEventHelloAssoTickets";
import { HelloAssoSoldItem } from "../../helloAsso/v5/resources";
import { addContactsToMailingList } from "../../mailClient/sendInBlue/addContactsToMailingList";

const upsertAttendeesFromHelloAssoTickets = async (helloAssoTickets: HelloAssoSoldItem[]) => {
  const attendeesToUpsert = uniqBy(helloAssoTickets, (t) => `${t.payer.email} ${t.user.firstName}`).map(
    formatTicketToAttendee
  );
  return upsertAttendees(attendeesToUpsert);
};

const upsertTicketsFromHelloAssoTickets = async (
  helloAssoTickets: HelloAssoSoldItem[],
  event: Event,
  attendees: Attendee[]
) => {
  const ticketsToUpsert = helloAssoTickets.map(formatHelloAssoTicketToTicket(event, attendees));
  return upsertTickets(ticketsToUpsert);
};

export const updateSingleEventTicketsAttendees = async (event: Event) => {
  if (!event.slug) {
    return {
      attendees: [],
      tickets: [],
    };
  }
  const helloAssoTickets = await fetchEventHelloAssoTickets(event.slug);

  const upsertedAttendees = await upsertAttendeesFromHelloAssoTickets(helloAssoTickets);

  const upsertedTickets = await upsertTicketsFromHelloAssoTickets(helloAssoTickets, event, upsertedAttendees);

  await updateEvent({
    ...event,
    tickets: upsertedTickets,
  });

  await addContactsToMailingList({
    contactsMailsToAdd: uniq(upsertedAttendees.map((attendee) => attendee.email)),
    listId: event.mailjetListId,
  });
  console.log(`Processed attendees and tickets of event ${event.name}`);
  await waait(2000);

  return { attendees: upsertedAttendees, tickets: upsertedTickets };
};

export const updateAllEventsTicketsAttendees = async (events: Event[]) => {
  const results = await Promise.all(events.map((event) => limit(() => updateSingleEventTicketsAttendees(event))));
  console.log(`Processed tickets of ${results.length} events`);
};
