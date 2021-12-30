import { fetchListContacts } from "../fetchListContacts";
import { ContactToAdd } from "../types";

export const selectContactsNotInListYet = async (listId: string, contactsToAdd: ContactToAdd[]) => {
  const contactsAlreadyThere = await fetchListContacts(listId);

  return contactsToAdd.filter(
    (contact) =>
      !contactsAlreadyThere
        .map((contactAlreadyThere) => contactAlreadyThere.email)
        .includes(contact.email.toLowerCase())
  );
};
