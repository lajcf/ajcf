import { getRepository, In } from "typeorm";
import { Attendee } from "../../../entities/Attendee";

export const upsertAttendees = async (attendees: Partial<Attendee>[]): Promise<Attendee[]> => {
  const insertResult = await getRepository(Attendee)
    .createQueryBuilder()
    .insert()
    .into(Attendee)
    .values(attendees.map((attendee) => ({ ...attendee, updatedAt: new Date() })))
    .orUpdate({
      conflict_target: ["email"],
      overwrite: ["updated_at", "first_name", "last_name", "last_participation_date"],
    })
    .execute();
  const attendeesInserted = insertResult.identifiers as { email: string }[];
  const attendeesEmails = attendeesInserted.map((attendee) => attendee.email);
  if (attendeesEmails.length === 0) return [];
  return getRepository(Attendee).find({ where: { email: In(attendeesEmails) } });
};
