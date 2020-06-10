import { getRepository } from "typeorm";
import moment from "moment";
import { Ticket } from "../../../entities/Ticket";
import { Event } from "../../../entities/Event";
import { fetchActions } from "../../helloAsso/fetchActions";
import { HelloAssoAction } from "../../helloAsso/resources";
import { Attendee } from "../../../entities/Attendee";
import { linkContactsToMailingList, MailingListAction } from "../../mailjet/linkContactsToMailingList";
import { limit } from "../../../utils/pLimit";
import { saveMultipleEntities, saveSingleEntity } from "../../../utils/saveUtils";
import { upsertAttendees } from "../../attendees/upsertAttendees";

export const formatTicketToAttendee = (action: HelloAssoAction) => ({
  email: action.email.toLowerCase(),
  firstName: action.first_name,
  lastName: action.last_name,
  lastParticipationDate: moment.utc(action.date).toDate(),
});

export const formatHelloAssoTicketToTicket = (event: Event, attendees: Attendee[]) => (action: HelloAssoAction) => {
  const relatedAttendee = attendees.find((attendee) => attendee.email === action.email);
  if (!relatedAttendee)
    throw new Error(
      `Attendee with email ${action.email} could not be found among attendees of event: ${JSON.stringify(
        event,
        null,
        2
      )}`
    );
  return {
    id: parseInt(action.id, 10).toString(),
    attendee: relatedAttendee,
    event,
    date: moment.utc(action.date).toDate(),
    amount: action.amount,
    ticketType: action.option_label,
  };
};

export const updateSingleEventTicketAttendeeEntities = async (event: Event) => {
  const helloAssoTickets = await fetchActions({ actionType: "INSCRIPTION", campaignId: `00000${event.id}` });
  console.log("HAHAHA", JSON.stringify(helloAssoTickets, null, 2));
  /*const attendees = await saveMultipleEntities(
    uniqBy(helloAssoTickets.map(formatTicketToAttendee), (attendee) => attendee.email),
    getRepository(Attendee),
    "email"
  );*/
  const attendees = await upsertAttendees(helloAssoTickets.map(formatTicketToAttendee));
  console.log("HAHAHA", JSON.stringify(attendees, null, 2));
  const tickets = await saveMultipleEntities(
    helloAssoTickets.map(formatHelloAssoTicketToTicket(event, attendees)),
    getRepository(Ticket),
    "id"
  );
  console.log("HAHAHA", JSON.stringify(tickets, null, 2));
  await saveSingleEntity(
    {
      ...event,
      tickets,
    },
    getRepository(Event),
    "id"
  );
  const mailingListId = event.mailjetListId;
  if (!mailingListId) throw new Error(`Event ${event.name} does not have a related mailing list on Mailjet`);
  await linkContactsToMailingList({
    Contacts: attendees.map((attendee) => ({
      Email: attendee.email,
    })),
    ContactsLists: [
      {
        Action: MailingListAction.addnoforce,
        ListID: mailingListId,
      },
    ],
  });
  console.log(`Processed attendees and tickets of event ${event.name}`);
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
