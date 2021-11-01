import dotenv from "dotenv";
import { upsertHelloAssoMembers } from "../services/members/mutations/upsertHelloAssoMembers";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { sendWelcomeMails } from "../services/members/mutations/sendWelcomeMails/sendWelcomeMails";
import { subscribeMembersToNewsletter } from "../services/members/mutations/subscribeMembersToNewsletter";

dotenv.config();

export const updateMembers = async () => {
  try {
    await openConnectionToDb();
    const upsertedMembers = await upsertHelloAssoMembers();
    await sendWelcomeMails(upsertedMembers);
    await subscribeMembersToNewsletter(upsertedMembers);
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};

export const handler = async (event: any) => {
  console.log(JSON.stringify(event, null, 2));
  await updateMembers();
};
