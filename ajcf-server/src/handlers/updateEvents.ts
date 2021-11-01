import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";
import { updateEventEntities } from "../services/events/mutations/updateEventEntities";
import { updateAllEventsTicketsAttendees } from "../services/attendees/mutations/updateAllEventsTicketsAttendees";

export const updateEvents = async () => {
  try {
    await openConnectionToDb();
    const events = await updateEventEntities();
    await updateAllEventsTicketsAttendees(events);
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};

export const handler = async (event: any) => {
  console.log(JSON.stringify(event, null, 2));
  await updateEvents();
};
