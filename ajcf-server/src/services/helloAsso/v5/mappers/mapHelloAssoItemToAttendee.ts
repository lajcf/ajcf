import { uniqBy } from "lodash";
import dayjs from "../../../../utils/dayjs";
import { HelloAssoSoldItem } from "../resources";
import { Attendee } from "../../../../entities/Attendee";
import { HelloAssoOrder } from "../../../../types";

export const formatTicketToAttendee = (action: HelloAssoSoldItem): Partial<Attendee> => ({
  email: action.payer.email.toLowerCase(),
  firstName: action.user.firstName,
  lastName: action.user.lastName,
  lastParticipationDate: dayjs.utc(action.order.date).toDate(),
});

export const formatOrderToAttendees = (order: HelloAssoOrder): Partial<Attendee>[] =>
  uniqBy(
    order.items.map((item) => ({
      email: order.payer.email.toLowerCase(),
      firstName: item.user.firstName,
      lastName: item.user.lastName,
      lastParticipationDate: dayjs.utc(order.date).toDate(),
    })),
    (attendee) => `${attendee.email} ${attendee.firstName}`
  );
