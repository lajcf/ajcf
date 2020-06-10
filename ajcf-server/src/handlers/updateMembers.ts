import dotenv from "dotenv";
import { upsertHelloAssoMembers } from "../services/members/mutations/upsertHelloAssoMembers";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { addEntitiesToGoogleSheet } from "../services/googleSheet/googleSheetOperations";
import { fetchAllMembersFromDb } from "../services/members/queries/fetchAllMembersFromDb";
import { Member } from "../entities/Member";
import { sendWelcomeMails } from "../services/members/mutations/sendWelcomeMails/sendWelcomeMails";

dotenv.config();

export const updateMembers = async () => {
  try {
    await openConnectionToDb();
    await upsertHelloAssoMembers();
    const membersFromDb = await fetchAllMembersFromDb();
    await addEntitiesToGoogleSheet<Member>(membersFromDb);
    await sendWelcomeMails(membersFromDb);
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
