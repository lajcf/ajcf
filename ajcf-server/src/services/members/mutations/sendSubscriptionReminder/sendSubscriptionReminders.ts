import { sendSubscriptionReminder } from "./sendSubscriptionReminder";
import { fetchOutdatedMembers } from "./fetchOutdatedMembers";
import { fetchSendSubscriptionReminderActivities } from "./fetchSendSubscriptionReminderActivities";
import { keepMembersWhoNeedReminder } from "./keepMembersWhoNeedReminder";
import { createSendReminderActivities } from "./createSendReminderActivities";

export const sendSubscriptionReminders = async () => {
  const outdatedMembers = await fetchOutdatedMembers();
  const sendSubscriptionReminderActivities = await fetchSendSubscriptionReminderActivities();
  const shouldSendMailMembers = outdatedMembers.filter(keepMembersWhoNeedReminder(sendSubscriptionReminderActivities));
  await Promise.all(shouldSendMailMembers.map(sendSubscriptionReminder));
  console.log(
    `Send reminders to ${shouldSendMailMembers.length} members: ${shouldSendMailMembers.map(
      (member) => `${member.firstName} ${member.lastName}`
    )}`
  );
  await createSendReminderActivities(shouldSendMailMembers);
};
