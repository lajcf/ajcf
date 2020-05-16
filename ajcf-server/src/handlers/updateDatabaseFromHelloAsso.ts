import dotenv from "dotenv";
import { upsertHelloAssoMembers } from "../services/members/mutations/upsertHelloAssoMembers";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { addEntitiesToGoogleSheet } from "../services/googleSheet/googleSheetOperations";
import { fetchAllMembersFromDb } from "../services/members/queries/fetchAllMembersFromDb";
import { upsertHelloAssoEvents } from "../services/events/mutations/upsertHelloAssoEvents";
import { fetchAllEventsFromDb } from "../services/events/query/fetchAllEventsFromDb";
import { Member } from "../entities/Member";
import { sendWelcomeMails } from "../services/members/mutations/sendWelcomeMails/sendWelcomeMails";

dotenv.config();

export const updateDatabaseFromHelloAsso = async () => {
  try {
    await openConnectionToDb();
    await Promise.all([upsertHelloAssoMembers(), upsertHelloAssoEvents()]);
    const [membersFromDb, eventsFromDb] = await Promise.all([fetchAllMembersFromDb(), fetchAllEventsFromDb()]);
    await Promise.all([addEntitiesToGoogleSheet<Member>(membersFromDb), addEntitiesToGoogleSheet(eventsFromDb)]);
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
  await updateDatabaseFromHelloAsso();
};
