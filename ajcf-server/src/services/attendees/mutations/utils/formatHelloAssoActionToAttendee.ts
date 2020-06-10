import { HelloAssoAction } from "../../../helloAsso/resources";
import moment from "moment";

export const formatTicketToAttendee = (action: HelloAssoAction) => ({
  email: action.email.toLowerCase(),
  firstName: action.first_name,
  lastName: action.last_name,
  lastParticipationDate: moment.utc(action.date).toDate(),
});
