import { first, orderBy } from "lodash";
import dayjs from "../../../../utils/dayjs";
import { Member } from "../../../../entities/Member";
import { Activity } from "../../../../entities/Activity";

export const keepMembersWhoNeedReminder = (sendSubscriptionReminderActivities: Activity[]) => (
  member: Member
): boolean => {
  const sendReminderActivitiesForMember = sendSubscriptionReminderActivities.filter(
    (activity) => activity.memberId === member.id
  );
  const lastReminderActivityForMember = first(orderBy(sendReminderActivitiesForMember, "createdAt", "desc"));
  if (
    lastReminderActivityForMember &&
    dayjs(member.lastSubscriptionDate).isBefore(lastReminderActivityForMember.createdAt)
  ) {
    return false;
  }
  return dayjs().isAfter(member.lastSubscriptionDate);
};
