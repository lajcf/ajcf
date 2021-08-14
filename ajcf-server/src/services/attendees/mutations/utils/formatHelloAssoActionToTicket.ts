import { Event } from "../../../../entities/Event";
import { Attendee } from "../../../../entities/Attendee";
import { HelloAssoAction } from "../../../helloAsso/resources";
import dayjs from "../../../../utils/dayjs";

export const formatHelloAssoTicketToTicket = (event: Event, attendees: Attendee[]) => (action: HelloAssoAction) => {
  const relatedAttendee = attendees.find((attendee) => attendee.email.toLowerCase() === action.email.toLowerCase());
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
    date: dayjs.utc(action.date).toDate(),
    amount: action.amount,
    ticketType: action.option_label,
  };
};
