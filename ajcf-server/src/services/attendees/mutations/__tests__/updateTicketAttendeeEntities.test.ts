/* eslint-disable @typescript-eslint/no-var-requires */
import moment from "moment";
import { updateSingleEventTicketAttendeeEntities } from "../updateTicketAttendeeEntities";

jest.mock("../../../helloAsso/fetchActions");
const { fetchActions } = require("../../../helloAsso/fetchActions");

jest.mock("../upsertAttendees");
const { upsertAttendees } = require("../upsertAttendees");

jest.mock("../../../tickets/upsertTickets");
const { upsertTickets } = require("../../../tickets/upsertTickets");

jest.mock("../../../events/mutations/updateEvent");
const { updateEvent } = require("../../../events/mutations/updateEvent");

jest.mock("../../../mailjet/linkContactsToMailingList");
const { linkContactsToMailingList } = require("../../../mailjet/linkContactsToMailingList");

const event = {
  mailjetListId: "0",
  name: "test",
};
const helloAssoTickets = [
  {
    id: "0",
    date: moment.utc("2020-06-10").format("YYYY-MM-DD"),
    first_name: "Laetitia",
    last_name: "Chhiv",
    email: "dictatriceajcf@gmail.com",
    amount: 1,
    option_label: "label_1",
  },
  {
    id: "1",
    date: moment.utc("2020-06-08").format("YYYY-MM-DD"),
    first_name: "Nicolas",
    last_name: "Li",
    email: "premierhomme@gmail.com",
    amount: 2,
    option_label: "label_2",
  },
  {
    id: "2",
    date: moment.utc("2020-06-11").format("YYYY-MM-DD"),
    first_name: "Nicolas",
    last_name: "Li",
    email: "premierhomme@gmail.com",
    amount: 3,
    option_label: "label_3",
  },
];

const attendees = [
  {
    email: "dictatriceajcf@gmail.com",
    firstName: "Laetitia",
    lastName: "Chhiv",
    lastParticipationDate: moment.utc("2020-06-10").toDate(),
  },
  {
    email: "premierhomme@gmail.com",
    firstName: "Nicolas",
    lastName: "Li",
    lastParticipationDate: moment.utc("2020-06-08").toDate(),
  },
];

const tickets = [
  {
    id: "0",
    attendee: {
      email: "dictatriceajcf@gmail.com",
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: moment.utc("2020-06-10").toDate(),
    amount: 1,
    ticketType: "label_1",
  },
  {
    id: "1",
    attendee: {
      email: "premierhomme@gmail.com",
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: moment.utc("2020-06-08").toDate(),
    amount: 2,
    ticketType: "label_2",
  },
  {
    id: "2",
    attendee: {
      email: "premierhomme@gmail.com",
    },
    event: {
      mailjetListId: "0",
      name: "test",
    },
    date: moment.utc("2020-06-12").toDate(),
    amount: 3,
    ticketType: "label_3",
  },
];

describe("updateTicketAttendeeEntities", () => {
  test("updateSingleEventTicketAttendeeEntities", async () => {
    fetchActions.mockImplementation(async () => helloAssoTickets);
    upsertAttendees.mockImplementation(async () => attendees);
    upsertTickets.mockImplementation(async () => tickets);
    // @ts-ignore
    await updateSingleEventTicketAttendeeEntities(event);
    expect(upsertAttendees).toHaveBeenCalledWith([
      {
        email: "dictatriceajcf@gmail.com",
        firstName: "Laetitia",
        lastName: "Chhiv",
        lastParticipationDate: moment.utc("2020-06-10").toDate(),
      },
      {
        email: "premierhomme@gmail.com",
        firstName: "Nicolas",
        lastName: "Li",
        lastParticipationDate: moment.utc("2020-06-08").toDate(),
      },
    ]);
    expect(upsertTickets).toHaveBeenCalledWith([
      {
        id: "0",
        attendee: {
          email: "dictatriceajcf@gmail.com",
          firstName: "Laetitia",
          lastName: "Chhiv",
          lastParticipationDate: moment.utc("2020-06-10").toDate(),
        },
        event,
        date: moment.utc("2020-06-10").toDate(),
        amount: 1,
        ticketType: "label_1",
      },
      {
        id: "1",
        attendee: {
          email: "premierhomme@gmail.com",
          firstName: "Nicolas",
          lastName: "Li",
          lastParticipationDate: moment.utc("2020-06-08").toDate(),
        },
        event,
        date: moment.utc("2020-06-08").toDate(),
        amount: 2,
        ticketType: "label_2",
      },
      {
        id: "2",
        attendee: {
          email: "premierhomme@gmail.com",
          firstName: "Nicolas",
          lastName: "Li",
          lastParticipationDate: moment.utc("2020-06-12").toDate(),
        },
        event,
        date: moment.utc("2020-06-12").toDate(),
        amount: 3,
        ticketType: "label_2",
      },
    ]);
    expect(updateEvent).toHaveBeenCalled();
    expect(linkContactsToMailingList).toHaveBeenCalledWith({ attendees, event });
  });
});
