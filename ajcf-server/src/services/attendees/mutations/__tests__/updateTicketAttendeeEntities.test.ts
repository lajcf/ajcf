/* eslint-disable @typescript-eslint/no-var-requires */
import dayjs from "../../../../utils/dayjs";
import { updateSingleEventTicketsAttendees } from "../updateAllEventsTicketsAttendees";

jest.mock("../../../helloAsso/v5/fetchEventHelloAssoTickets");
const { fetchEventHelloAssoTickets } = require("../../../helloAsso/v5/fetchEventHelloAssoTickets");

jest.mock("../upsertAttendees");
const { upsertAttendees } = require("../upsertAttendees");

jest.mock("../../../tickets/upsertTickets");
const { upsertTickets } = require("../../../tickets/upsertTickets");

jest.mock("../../../events/mutations/updateEvent");
const { updateEvent } = require("../../../events/mutations/updateEvent");

jest.mock("../../../mailClient/sendInBlue/addContactsToMailingList");
const { addContactsToMailingList } = require("../../../mailClient/sendInBlue/addContactsToMailingList");

const event = {
  id: "0",
  mailjetListId: "0",
  name: "test",
};
const helloAssoTickets = [
  {
    id: "2",
    order: {
      date: dayjs.utc("2020-06-11").format("YYYY-MM-DD"),
    },
    user: {
      firstName: "Nicolas",
      lastName: "Li",
    },
    payer: {
      email: "premierhomme@gmail.com",
    },
    amount: 300,
    name: "label_3",
  },
  {
    id: "0",
    order: {
      date: dayjs.utc("2020-06-10").format("YYYY-MM-DD"),
    },
    user: {
      firstName: "Laetitia",
      lastName: "Chhiv",
    },
    payer: {
      email: "dictatriceajcf@gmail.com",
    },
    amount: 100,
    name: "label_1",
  },
  {
    id: "1",
    order: {
      date: dayjs.utc("2020-06-08").format("YYYY-MM-DD"),
    },
    user: {
      firstName: "Nicolas",
      lastName: "Li",
    },
    payer: {
      email: "premierhomme@gmail.com",
    },
    amount: 200,
    name: "label_2",
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
      id: "0",
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
      id: "0",
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
      id: "0",
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
    fetchEventHelloAssoTickets.mockImplementation(async () => helloAssoTickets);
    upsertAttendees.mockImplementation(async () => attendees);
    upsertTickets.mockImplementation(async () => tickets);
    // @ts-ignore
    await updateSingleEventTicketsAttendees(event);
    expect(upsertAttendees).toHaveBeenCalledWith(attendees);
    expect(upsertTickets).toHaveBeenCalledWith(tickets);
    expect(updateEvent).toHaveBeenCalled();
    expect(addContactsToMailingList).toHaveBeenCalledWith({
      contactsMails: attendees.map((attendee) => attendee.email),
      listId: event.mailjetListId,
    });
  });
});
