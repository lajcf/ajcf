import dayjs from "../../../../utils/dayjs";
import { HelloAssoSoldItem } from "../resources";
import { Attendee } from "../../../../entities/Attendee";

export const formatTicketToAttendee = (action: HelloAssoSoldItem): Partial<Attendee> => ({
  email: action.payer.email.toLowerCase(),
  firstName: action.user.firstName,
  lastName: action.user.lastName,
  lastParticipationDate: dayjs.utc(action.order.date).toDate(),
});
