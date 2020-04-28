import { upsertHelloAssoMembers } from "../src/helloAsso/upsertHelloAssoMembers";
import {
  closeConnectionToDb,
  openConnectionToDb,
} from "../src/utils/dbHandlers";
import { addEntitiesToGoogleSheet } from "../src/googleSheet/googleSheetOperations";
import { fetchAllMembersFromDb } from "../src/services/members/queries/fetchAllMembersFromDb";
import { upsertHelloAssoEvents } from "../src/helloAsso/upsertHelloAssoEvents";
import { fetchAllEventsFromDb } from "../src/services/events/query/fetchAllEventsFromDb";
import { Member } from "../src/entities/Member";
import { sendWelcomeMails } from "../src/services/members/mutations/sendWelcomeMails/sendWelcomeMails";

export const updateDatabaseFromHelloAsso = async () => {
  try {
    await openConnectionToDb();
    const [insertedMembersToDb, insertedEventsToDb] = await Promise.all([
      upsertHelloAssoMembers(),
      upsertHelloAssoEvents(),
    ]);
    console.log(`Upserted ${insertedMembersToDb.length} members into DB`);
    console.log(`Upserted ${insertedEventsToDb.length} events into DB`);
    const [membersFromDb, eventsFromDb] = await Promise.all([
      fetchAllMembersFromDb(),
      fetchAllEventsFromDb(),
    ]);
    const [
      insertedMembersToGSheetNb,
      insertedEventsToGSheetNb,
    ] = await Promise.all([
      addEntitiesToGoogleSheet<Member>(membersFromDb),
      addEntitiesToGoogleSheet(eventsFromDb),
    ]);
    console.log(`Inserted ${insertedMembersToGSheetNb} members into GSheet`);
    console.log(`Inserted ${insertedEventsToGSheetNb} events into GSheet`);
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
