import { sendInBlueClient } from "../sdk";
import { createNotExistingContacts } from "./createNotExistingContacts";
import { ContactToAdd } from "../types";
import { selectContactsNotInListYet } from "./selectContactsNotInListYet";

export const addContactsToMailingList = async ({
  listId,
  contactsToAdd,
}: {
  listId: string | null;
  contactsToAdd: ContactToAdd[];
}) => {
  if (process.env.ENV !== "prod") {
    console.log("Development environment, do not link contacts to mailing list");
    return;
  }
  if (!listId) {
    console.log("No list ID for this event");
    return;
  }

  await createNotExistingContacts(contactsToAdd);

  const contactsNotInListYet = await selectContactsNotInListYet(listId, contactsToAdd);

  if (!contactsNotInListYet.length) {
    console.log(`No new contact to add to event with listId ${listId}`);
    return;
  }
  const apiInstance = new sendInBlueClient.ContactsApi();

  const contactEmails = new sendInBlueClient.AddContactToList();

  contactEmails.emails = contactsNotInListYet.map((contact) => contact.email);

  const result = await apiInstance.addContactToList(listId, contactEmails);

  console.log(`Contacts added successfully to mailing list with ID ${listId}: ${JSON.stringify(result, null, 2)}`);
};
