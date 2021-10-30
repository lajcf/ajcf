/* eslint-disable @typescript-eslint/no-var-requires */
import dayjs from "../../../../utils/dayjs";
import { updateSingleEventTicketAttendeeEntities } from "../updateTicketAttendeeEntities";

jest.mock("../../../helloAsso/v3_deprecated/fetchActions");
const { fetchActions } = require("../../../helloAsso/v3_deprecated/fetchActions");

jest.mock("../upsertAttendees");
const { upsertAttendees } = require("../upsertAttendees");

jest.mock("../../../tickets/upsertTickets");
const { upsertTickets } = require("../../../tickets/upsertTickets");

jest.mock("../../../events/mutations/updateEvent");
const { updateEvent } = require("../../../events/mutations/updateEvent");

jest.mock("../../mutations/utils/subscribeAttendeesToEventMailingList");
const { subscribeAttendeesToEventMailingList } = require("../utils/subscribeAttendeesToEventMailingList");

const event = {
  id: "0",
  mailjetListId: "0",
  name: "test",
};
const helloAssoTickets = [
  {
    id: "2",
    date: dayjs.utc("2020-06-11").format("YYYY-MM-DD"),
    first_name: "Nicolas",
    last_name: "Li",
    email: "premierhomme@gmail.com",
    amount: 3,
    option_label: "label_3",
  },
  {
    id: "0",
    date: dayjs.utc("2020-06-10").format("YYYY-MM-DD"),
    first_name: "Laetitia",
    last_name: "Chhiv",
    email: "dictatriceajcf@gmail.com",
    amount: 1,
    option_label: "label_1",
  },
  {
    id: "1",
    date: dayjs.utc("2020-06-08").format("YYYY-MM-DD"),
    first_name: "Nicolas",
    last_name: "Li",
    email: "premierhomme@gmail.com",
    amount: 2,
    option_label: "label_2",
  },
];

const attendees = [
  {
    email: "premierhomme@gmail.com",
    firstName: "Nicolas",
    lastName: "Li",
    lastParticipationDate: dayjs.utc("2020-06-11").toDate(),
  },
  {
    email: "dictatriceajcf@gmail.com",
    firstName: "Laetitia",
    lastName: "Chhiv",
    lastParticipationDate: dayjs.utc("2020-06-10").toDate(),
  },
];

const tickets = [
  {
    id: "2",
    attendee: {
      email: "premierhomme@gmail.com",
      firstName: "Nicolas",
      lastName: "Li",
      lastParticipationDate: dayjs.utc("2020-06-11").toDate(),
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: dayjs.utc("2020-06-11").toDate(),
    amount: 3,
    ticketType: "label_3",
  },
  {
    id: "0",
    attendee: {
      email: "dictatriceajcf@gmail.com",
      firstName: "Laetitia",
      lastName: "Chhiv",
      lastParticipationDate: dayjs.utc("2020-06-10").toDate(),
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: dayjs.utc("2020-06-10").toDate(),
    amount: 1,
    ticketType: "label_1",
  },
  {
    id: "1",
    attendee: {
      email: "premierhomme@gmail.com",
      firstName: "Nicolas",
      lastName: "Li",
      lastParticipationDate: dayjs.utc("2020-06-11").toDate(),
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: dayjs.utc("2020-06-08").toDate(),
    amount: 2,
    ticketType: "label_2",
  },
];

describe("updateTicketAttendeeEntities", () => {
  test("updateSingleEventTicketAttendeeEntities", async () => {
    fetchActions.mockImplementation(async () => helloAssoTickets);
    upsertAttendees.mockImplementation(async () => attendees);
    upsertTickets.mockImplementation(async () => tickets);
    // @ts-ignore
    await updateSingleEventTicketAttendeeEntities(event);
    expect(upsertAttendees).toHaveBeenCalledWith(attendees);
    expect(upsertTickets).toHaveBeenCalledWith(tickets);
    expect(updateEvent).toHaveBeenCalled();
    expect(subscribeAttendeesToEventMailingList).toHaveBeenCalledWith({ attendees, event });
  });
});
