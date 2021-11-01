import { getRepository, In } from "typeorm";
import { compact } from "lodash";
import { Member } from "../../../entities/Member";

export const upsertMembers = async (membersToUpsert: Partial<Member>[]): Promise<Member[]> => {
  const upsertResult = await getRepository(Member)
    .createQueryBuilder()
    .insert()
    .into(Member)
    .values(membersToUpsert)
    .orUpdate(["updated_at", "birth_date", "phone", "job_study", "last_subscription_date"], ["email", "first_name"])
    .execute();
  console.log(`Upserted ${JSON.stringify(upsertResult, null, 2)} members into DB`);
  const membersUpsertedEmails = compact(membersToUpsert.map((member) => member.email));
  if (membersUpsertedEmails.length === 0) {
    return [];
  }
  return getRepository(Member).find({ where: { email: In(membersUpsertedEmails) } });
};
