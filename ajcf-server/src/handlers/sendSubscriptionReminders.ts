import { sendSubscriptionReminders } from "../services/members/mutations/sendSubscriptionReminder/sendSubscriptionReminders";

export const handler = async () => {
  await sendSubscriptionReminders();
};
