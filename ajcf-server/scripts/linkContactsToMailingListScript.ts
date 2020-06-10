import dotenv from "dotenv";
import { linkContactsToMailingList, MailingListAction } from "../src/services/mailjet/linkContactsToMailingList";

dotenv.config();

const TEST_LIST_ID = "31338";

export const linkContactsToMailingListScript = async () => {
  process.env.ENV = "prod";
  await linkContactsToMailingList({
    Contacts: [
      {
        Email: "linkonic@yahoo.fr",
        Name: "Nicolas",
      },
    ],
    ContactsLists: [
      {
        Action: MailingListAction.addnoforce,
        ListID: TEST_LIST_ID,
      },
    ],
  });
};

linkContactsToMailingListScript();
