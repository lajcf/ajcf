import waait from "waait";
import { uniqBy } from "lodash";
import { Ticket } from "../../../entities/Ticket";
import { Event } from "../../../entities/Event";
import { fetchActions } from "../../helloAsso/fetchActions";
import { linkContactsToMailingList } from "../../mailjet/linkContactsToMailingList";
import { limit } from "../../../utils/pLimit";
import { upsertAttendees } from "./upsertAttendees";
import { updateEvent } from "../../events/mutations/updateEvent";
import { upsertTickets } from "../../tickets/upsertTickets";
import { formatTicketToAttendee } from "./utils/formatHelloAssoActionToAttendee";
import { formatHelloAssoTicketToTicket } from "./utils/formatHelloAssoActionToTicket";
import { Attendee } from "../../../entities/Attendee";

export const updateSingleEventTicketAttendeeEntities = async (event: Event) => {
  const helloAssoActions = await fetchActions({ actionType: "INSCRIPTION", campaignId: `00000${event.id}` });
  const attendees = await upsertAttendees(uniqBy(helloAssoActions, (t) => t.email).map(formatTicketToAttendee));
  const tickets = await upsertTickets(helloAssoActions.map(formatHelloAssoTicketToTicket(event, attendees)));
  await updateEvent({
    ...event,
    tickets,
  });
  await linkContactsToMailingList({ attendees, event });
  console.log(`Processed attendees and tickets of event ${event.name}`);
  await waait(1000);
  return { attendees, tickets };
};

export const updateTicketAttendeeEntities = async (
  events: Event[]
): Promise<{ attendees: Attendee[]; tickets: Ticket[] }> => {
  const results = await Promise.all(events.map((event) => limit(() => updateSingleEventTicketAttendeeEntities(event))));
  console.log(`Processed tickets of ${results.length} events`);
  return {
    attendees: results.flatMap((result) => result.attendees),
    tickets: results.flatMap((result) => result.tickets),
  };
};
