import { map } from "lodash";
import { sendInBlueClient } from "./sdk";
import { fetchListContacts } from "./fetchListContacts";

const selectContactsNotInListYet = async (listId: string, contactsMailsToAdd: string[]): Promise<string[]> => {
  const contactsAlreadyThere = await fetchListContacts(listId);

  return contactsMailsToAdd.filter(
    (contactMail) => !map(contactsAlreadyThere, "email").includes(contactMail.toLowerCase())
  );
};

export const addContactsToMailingList = async ({
  listId,
  contactsMailsToAdd,
}: {
  listId: string | null;
  contactsMailsToAdd: string[];
}) => {
  if (process.env.ENV !== "prod") {
    console.log("Development environment, do not link contacts to mailing list");
    return;
  }
  if (!listId) {
    console.log("No list ID for this event");
    return;
  }

  const contactsNotInListYet = await selectContactsNotInListYet(listId, contactsMailsToAdd);

  if (!contactsNotInListYet.length) {
    console.log(`No new contact to add to event with listId ${listId}`);
    return;
  }
  const apiInstance = new sendInBlueClient.ContactsApi();

  const contactEmails = new sendInBlueClient.AddContactToList();

  contactEmails.emails = contactsNotInListYet;

  const result = await apiInstance.addContactToList(listId, contactEmails);

  console.log(`Contacts added successfully to mailing list with ID ${listId}: ${JSON.stringify(result, null, 2)}`);
};
