import { HelloAssoAction } from "../../../helloAsso/resources";
import dayjs from "../../../../utils/dayjs";

export const formatTicketToAttendee = (action: HelloAssoAction) => ({
  email: action.email.toLowerCase(),
  firstName: action.first_name,
  lastName: action.last_name,
  lastParticipationDate: dayjs.utc(action.date).toDate(),
});
