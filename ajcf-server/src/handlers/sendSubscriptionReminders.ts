import { sendSubscriptionReminders } from "../services/members/mutations/sendSubscriptionReminder/sendSubscriptionReminders";
import { closeConnectionToDb, openConnectionToDb } from "../utils/dbHandlers";

export const handler = async () => {
  try {
    await openConnectionToDb();
    await sendSubscriptionReminders();
    await closeConnectionToDb();
  } catch (e) {
    console.log(e);
    await closeConnectionToDb();
    throw e;
  }
};
