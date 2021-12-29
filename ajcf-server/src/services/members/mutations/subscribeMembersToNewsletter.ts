import { uniqBy } from "lodash";
import { Member } from "../../../entities/Member";
import { SIB_MEMBERS_ID, SIB_NEWSLETTER_ID } from "../../../constants";
import { addContactsToMailingList } from "../../mailClient/sendInBlue/addContactsToMailingList/addContactsToMailingList";

export const subscribeMembersToNewsletter = async (members: Member[]) => {
  await addContactsToMailingList({
    listId: SIB_NEWSLETTER_ID,
    contactsToAdd: uniqBy(members, (member) => member.email),
  });
  await addContactsToMailingList({
    listId: SIB_MEMBERS_ID,
    contactsToAdd: uniqBy(members, (member) => member.email),
  });

  console.log(`${members.length} added to newsletter & members list!`);
};
