import { getRepository } from "typeorm";
import { Activity } from "../../../../entities/Activity";

export const fetchSendSubscriptionReminderActivities = async () => {
  return getRepository(Activity).find({
    where: { header: "subscription_reminder_sent" },
  });
};
