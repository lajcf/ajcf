import { getRepository, In } from "typeorm";
import { Attendee } from "../../../entities/Attendee";

export const upsertAttendees = async (attendees: Partial<Attendee>[]): Promise<Attendee[]> => {
  const insertResult = await getRepository(Attendee)
    .createQueryBuilder()
    .insert()
    .into(Attendee)
    .values(attendees)
    .orUpdate(["updated_at", "first_name", "last_name", "last_participation_date"], ["email", "first_name"])
    .execute();
  // it seems returned IDs by typeorm are not relevant!
  console.log(`Upserted ${JSON.stringify(insertResult, null, 2)} members into DB`);
  const attendeesEmails = attendees.map((attendee) => attendee.email);
  if (attendeesEmails.length === 0) return [];
  return getRepository(Attendee).find({ where: { email: In(attendeesEmails) } });
};
