import { sendInBlueClient } from "./sdk";
import { SibContact } from "./types";

export const fetchListContacts = async (listId: string): Promise<SibContact[]> => {
  const apiInstance = new sendInBlueClient.ContactsApi();
  const options = {
    limit: 500,
    offset: 0,
  };
  const results = (await apiInstance.getContactsFromList(listId, options)) as { contacts: SibContact[] };
  return results.contacts;
};
