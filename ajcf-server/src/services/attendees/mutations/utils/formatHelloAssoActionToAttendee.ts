import dayjs from "../../../../utils/dayjs";
import { HelloAssoSoldItem } from "../../../helloAsso/v5/resources";

export const formatTicketToAttendee = (action: HelloAssoSoldItem) => ({
  email: action.payer.email.toLowerCase(),
  firstName: action.user.firstName,
  lastName: action.user.lastName,
  lastParticipationDate: dayjs.utc(action.order.date).toDate(),
});
