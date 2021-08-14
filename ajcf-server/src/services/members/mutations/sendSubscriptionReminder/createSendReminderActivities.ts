import { getRepository } from "typeorm";
import { Activity } from "../../../../entities/Activity";
import { Member } from "../../../../entities/Member";

export const createSendReminderActivities = async (shouldSendMailMembers: Member[]) => {
  await getRepository(Activity).save(
    shouldSendMailMembers.map((member) =>
      getRepository(Activity).create({
        member,
        header: "subscription_reminder_sent",
      })
    )
  );
};
