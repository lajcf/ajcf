import { upsertHelloAssoMembers } from "../src/helloAsso/upsertHelloAssoMembers";
import { closeConnectionToDb, openConnectionToDb } from "../src/utils/dbHandlers";
import { addEntitiesToGoogleSheet } from "../src/googleSheet/googleSheetOperations";
import { fetchAllMembersFromDb } from "../src/services/members/queries/fetchAllMembersFromDb";
import { upsertHelloAssoEvents } from "../src/helloAsso/upsertHelloAssoEvents";
import { fetchAllEventsFromDb } from "../src/services/events/query/fetchAllEventsFromDb";
import { Member } from "../src/entities/Member";
import { sendWelcomeMails } from "../src/services/members/mutations/sendWelcomeMails/sendWelcomeMails";

export const updateDatabaseFromHelloAsso = async () => {
  try {
    await openConnectionToDb();
    await Promise.all([upsertHelloAssoMembers(), upsertHelloAssoEvents()]);
    const [membersFromDb, eventsFromDb] = await Promise.all([fetchAllMembersFromDb(), fetchAllEventsFromDb()]);
    await Promise.all([addEntitiesToGoogleSheet<Member>(membersFromDb), addEntitiesToGoogleSheet(eventsFromDb)]);
    await sendWelcomeMails(membersFromDb);
    await closeConnectionToDb();
  } catch (e) {
    await closeConnectionToDb();
    throw e;
  }
};

export const handler = async (event: any) => {
  console.log(JSON.stringify(event, null, 2));
  await updateDatabaseFromHelloAsso();
};
