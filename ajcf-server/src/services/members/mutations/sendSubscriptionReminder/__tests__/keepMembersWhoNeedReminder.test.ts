import { keepMembersWhoNeedReminder } from "../keepMembersWhoNeedReminder";
import dayjs from "../../../../../utils/dayjs";

describe("keepMembersWhoNeedReminder", () => {
  test("If outdated member hasn't received reminder, should send a reminder", () => {
    const activities = [
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
    const member = {
      id: "3",
      lastSubscriptionDate: dayjs("2020-07-14").toDate(),
    };
    // @ts-ignore
    const result = keepMembersWhoNeedReminder(activities)(member);
    expect(result).toBeTruthy();
  });
  test("If outdated member has already received reminder before his lastSubscriptionDate, should send a reminder", () => {
    const activities = [
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
    const member = {
      id: "2",
      lastSubscriptionDate: dayjs("2020-07-14").toDate(),
    };
    // @ts-ignore
    const result = keepMembersWhoNeedReminder(activities)(member);
    expect(result).toBeTruthy();
  });
  test("If outdated member has already received a reminder after his lastSubscription date, should not send a reminder", () => {
    const activities = [
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
    const member = {
      id: "1",
      lastSubscriptionDate: dayjs("2020-07-14").toDate(),
    };
    // @ts-ignore
    const result = keepMembersWhoNeedReminder(activities)(member);
    expect(result).toBeFalsy();
  });
});
