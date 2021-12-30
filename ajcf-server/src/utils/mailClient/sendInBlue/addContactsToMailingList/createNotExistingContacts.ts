import { pickBy } from "lodash";
import pLimit from "p-limit";
import { sendInBlueClient } from "../sdk";
import { ContactToAdd } from "../types";

const limit = pLimit(5);

const checkContactExists = async (contact: ContactToAdd) => {
  try {
    const contactInstance = new sendInBlueClient.ContactsApi();
    await contactInstance.getContactInfo(contact.email);
    return true;
  } catch {
    return false;
  }
};

const createContact = async (contact: ContactToAdd) => {
  const contactInstance = new sendInBlueClient.ContactsApi();
  const contactToCreate = new sendInBlueClient.CreateContact();
  contactToCreate.email = contact.email;
  contactToCreate.attributes = pickBy(
    { PRENOM: contact.firstName, NOM: contact.lastName },
    (value) => value !== undefined
  );
  await contactInstance.createContact(contactToCreate);
};

const createContactIfDoesNotExist = async (contact: ContactToAdd) => {
  const contactExist = await checkContactExists(contact);
  if (contactExist) {
    return;
  }
  await createContact(contact);
};

export const createNotExistingContacts = async (contacts: ContactToAdd[]) => {
  await Promise.all(contacts.map((contact) => limit(() => createContactIfDoesNotExist(contact))));
};
