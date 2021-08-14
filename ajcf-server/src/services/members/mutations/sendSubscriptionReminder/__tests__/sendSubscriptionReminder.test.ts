/* eslint-disable @typescript-eslint/no-var-requires */
import { sendSubscriptionReminders } from "../sendSubscriptionReminders";
import { createSendReminderActivities } from "../createSendReminderActivities";
import { sendSubscriptionReminder } from "../sendSubscriptionReminder";
import dayjs from "../../../../../utils/dayjs";

const outdatedMembers = [
  {
    id: "1",
    lastSubscriptionDate: dayjs("2020-07-14").toDate(),
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    lastSubscriptionDate: dayjs("2020-07-14").toDate(),
  },
  {
    id: "3",
    firstName: "Jane",
    lastName: "Doe",
    lastSubscriptionDate: dayjs("2020-07-14").toDate(),
  },
];

const sendReminderActivities = [
  {
    memberId: "1",
    createdAt: dayjs("2020-08-14").toDate(),
    header: "subscription_reminder_sent",
  },
  {
    memberId: "2",
    createdAt: dayjs("2020-06-14").toDate(),
    header: "subscription_reminder_sent",
  },
];

jest.mock("../fetchOutdatedMembers");
jest.mock("../fetchSendSubscriptionReminderActivities");
jest.mock("../sendSubscriptionReminder");
jest.mock("../createSendReminderActivities");

const { fetchOutdatedMembers } = require("../fetchOutdatedMembers");
const { fetchSendSubscriptionReminderActivities } = require("../fetchSendSubscriptionReminderActivities");

describe("sendSubscriptionReminder.test", () => {
  test("The workflow should be respected", async () => {
    fetchOutdatedMembers.mockImplementation(() => outdatedMembers);
    fetchSendSubscriptionReminderActivities.mockImplementation(() => sendReminderActivities);

    await sendSubscriptionReminders();
    expect(fetchOutdatedMembers).toHaveBeenCalled();
    expect(fetchSendSubscriptionReminderActivities).toHaveBeenCalled();
    expect(sendSubscriptionReminder).toHaveBeenCalledTimes(2);
    // @ts-ignore
    sendSubscriptionReminder.mock.calls[0] = {
      id: "2",
      firstName: "John",
      lastName: "Doe",
      lastSubscriptionDate: dayjs("2020-07-14").toDate(),
    };
    // @ts-ignore
    sendSubscriptionReminder.mock.calls[1] = {
      id: "3",
      firstName: "Jane",
      lastName: "Doe",
      lastSubscriptionDate: dayjs("2020-07-14").toDate(),
    };
    expect(createSendReminderActivities).toHaveBeenCalled();
  });
});
