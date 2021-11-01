import { sendInBlueClient } from "./sdk";

export const addContactsToMailingList = async ({
  listId,
  contactsMails,
}: {
  listId: string | null;
  contactsMails: string[];
}) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not link contacts to mailing list");
    return;
  }
  if (!listId) {
    console.log("No list ID for this event");
    return;
  }
  const apiInstance = new sendInBlueClient.ContactsApi();

  const contactEmails = new sendInBlueClient.AddContactToList();

  contactEmails.emails = contactsMails;

  const result = await apiInstance.addContactToList(listId, contactEmails);

  console.log(`Contacts added successfully to mailing list with ID ${listId}: ${JSON.stringify(result, null, 2)}`);
};
