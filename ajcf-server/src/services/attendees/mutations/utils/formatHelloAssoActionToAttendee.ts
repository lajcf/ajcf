import { HelloAssoAction } from "../../../helloAsso/v3_deprecated/resources";
import dayjs from "../../../../utils/dayjs";

export const formatTicketToAttendee = (action: HelloAssoAction) => ({
  email: action.email.toLowerCase(),
  firstName: action.first_name,
  lastName: action.last_name,
  lastParticipationDate: dayjs.utc(action.date).toDate(),
});
