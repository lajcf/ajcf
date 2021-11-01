import { Event } from "../../../../entities/Event";
import { Attendee } from "../../../../entities/Attendee";
import dayjs from "../../../../utils/dayjs";
import { HelloAssoSoldItem } from "../resources";
import { Ticket } from "../../../../entities/Ticket";

export const formatHelloAssoTicketToTicket = (event: Event, attendees: Attendee[]) => (
  item: HelloAssoSoldItem
): Partial<Ticket> => {
  const relatedAttendee = attendees.find((attendee) => attendee.email.toLowerCase() === item.payer.email.toLowerCase());
  if (!relatedAttendee)
    throw new Error(
      `Attendee with email ${item.payer.email} could not be found among attendees of event: ${JSON.stringify(
        event,
        null,
        2
      )}`
    );
  return {
    id: item.id.toString(),
    attendee: relatedAttendee,
    event,
    date: dayjs.utc(item.order.date).toDate(),
    amount: item.amount / 100,
    ticketType: item.name,
  };
};
