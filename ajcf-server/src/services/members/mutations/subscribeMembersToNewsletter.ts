import { Member } from "../../../entities/Member";
import { MAILJET_MEMBERS_ID, MAILJET_NEWSLETTER_ID } from "../../../constants";
import { linkContactsToMailingList } from "../../mailjet/linkContactsToMailingList";

export const subscribeMembersToNewsletter = async (members: Member[]) => {
  await linkContactsToMailingList({
    emails: members.map((member) => member.email),
    mailjetListId: MAILJET_NEWSLETTER_ID,
  });
  await linkContactsToMailingList({
    emails: members.map((member) => member.email),
    mailjetListId: MAILJET_MEMBERS_ID,
  });
  console.log(`${members.length} added to newsletter & members list!`);
};
