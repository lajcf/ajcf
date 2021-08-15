import { sendSubscriptionReminder } from "./sendSubscriptionReminder";
import { fetchOutdatedMembers } from "./fetchOutdatedMembers";
import { fetchSendSubscriptionReminderActivities } from "./fetchSendSubscriptionReminderActivities";
import { keepMembersWhoNeedReminder } from "./keepMembersWhoNeedReminder";
import { createSendReminderActivities } from "./createSendReminderActivities";

const isFullfilled = <T>(promise: PromiseSettledResult<T>): promise is PromiseFulfilledResult<T> =>
  promise.status === "fulfilled";

const isRejected = <T>(promise: PromiseSettledResult<T>): promise is PromiseRejectedResult =>
  promise.status === "rejected";

export const sendSubscriptionReminders = async () => {
  const outdatedMembers = await fetchOutdatedMembers();
  const sendSubscriptionReminderActivities = await fetchSendSubscriptionReminderActivities();
  const shouldSendMailMembers = outdatedMembers.filter(keepMembersWhoNeedReminder(sendSubscriptionReminderActivities));
  // TODO: maybe the workflow should be by members, instead of processing all the members then creating all activities
  try {
    const result = await Promise.allSettled(shouldSendMailMembers.map(sendSubscriptionReminder));
    const failures = result.filter(isRejected);
    const success = result.filter(isFullfilled);
    if (failures.length) {
      console.log(`Some promises failed: ${failures.map((fail) => fail.reason)}`);
    }
    console.log(
      `Send reminders to ${success.length} members: ${success.map(
        (member) => `${member.value.firstName} ${member.value.lastName}`
      )}`
    );
  } catch (e) {
    console.log("An error happened while sending reminders, activities will be created to avoid spamming members.");
  }
  await createSendReminderActivities(shouldSendMailMembers);
  console.log("Activities created");
};
