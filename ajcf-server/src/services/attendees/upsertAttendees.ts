import { getRepository } from "typeorm";
import { Attendee } from "../../entities/Attendee";

export const upsertAttendees = async (attendees: Partial<Attendee>[]) => {
  const insertResult = await getRepository(Attendee)
    .createQueryBuilder()
    .insert()
    .into(Attendee)
    .values(attendees.map((attendee) => ({ ...attendee, updatedAt: new Date() })))
    .onConflict(
      `("email")
                  DO UPDATE SET
                  "updated_at" = EXCLUDED."updated_at",
                  "firstName" = EXCLUDED."firtsName",
                  "lastName" = EXCLUDED."lastName",
                  "lastParticipationDate" = EXCLUDED."lastParticipationDate"`
    )
    .getSql();
  // .execute();
  console.log(JSON.stringify(insertResult, null, 2));
  return insertResult;
};
