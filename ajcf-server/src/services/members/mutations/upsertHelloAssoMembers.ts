import { getRepository } from "typeorm";
import { capitalize, orderBy, uniqBy } from "lodash";
import { Member } from "../../../entities/Member";
import dayjs from "../../../utils/dayjs";
import { validateEmail } from "../../../utils/validateMail";
import { fetchMembers } from "../../helloAsso/v5/fetchMembers";
import { HelloAssoSoldItem } from "../../helloAsso/v5/resources";

export enum CustomInfoEnum {
  birthDate = "Date de naissance",
  phone = "Numéro de téléphone",
  jobStudy = "Profession / Etudes",
  motivation = "Pourquoi veux-tu rejoindre l'AJCF ?",
}

export const extractDateInfo = (member: HelloAssoSoldItem, infoType: CustomInfoEnum): Date | null => {
  const date = member.customFields?.find((e) => e.name === infoType);
  if (date) {
    const parsedDateInFrench = dayjs.utc(date.answer, "DD/MM/YYYY");
    if (parsedDateInFrench.isValid()) {
      return parsedDateInFrench.toDate();
    }
    return dayjs.utc(date.answer).toDate();
  }
  return null;
};

export const extractStringInfo = (member: HelloAssoSoldItem, infoType: CustomInfoEnum): string | null => {
  const info = member.customFields?.find((e) => e.name === infoType);
  return info ? info.answer : null;
};

export const fetchHelloAssoMembers = async (): Promise<HelloAssoSoldItem[]> => {
  console.log("Fetch Hello Asso Members...");
  const subscriptions = await fetchMembers();
  console.log(`Fetched ${subscriptions.length} Hello Asso Members...`);
  return subscriptions.filter((subscription) => validateEmail(subscription.payer.email));
};

const keepLastSubscriptions = (helloAssoMembers: HelloAssoSoldItem[]) => {
  const orderedHelloAssoMembers = orderBy(helloAssoMembers, (member) => dayjs.utc(member.order.date).toDate(), "desc");
  return uniqBy(
    orderedHelloAssoMembers,
    (member) => `${member.payer.email.toLowerCase()}-${capitalize(member.payer.firstName)}`
  );
};

export const formatHelloAssoMembersForDb = (helloAssoMembers: HelloAssoSoldItem[]): Partial<Member>[] => {
  const uniqueHelloAssoMembers = keepLastSubscriptions(helloAssoMembers);
  return uniqueHelloAssoMembers.map((helloAssoMember) => {
    return {
      createdAt: new Date(),
      updatedAt: dayjs.utc(helloAssoMember.order.date).toDate(),
      email: helloAssoMember.payer.email.toLowerCase(),
      firstName: capitalize(helloAssoMember.user.firstName),
      lastName: capitalize(helloAssoMember.user.lastName),
      birthDate: extractDateInfo(helloAssoMember, CustomInfoEnum.birthDate),
      phone: extractStringInfo(helloAssoMember, CustomInfoEnum.phone),
      jobStudy: extractStringInfo(helloAssoMember, CustomInfoEnum.jobStudy),
      motivation: extractStringInfo(helloAssoMember, CustomInfoEnum.motivation),
      firstSubscriptionDate: dayjs.utc(helloAssoMember.order.date).toDate(),
      lastSubscriptionDate: dayjs.utc(helloAssoMember.order.date).toDate(),
      activeMember: false,
    };
  });
};

export const upsertHelloAssoMembers = async () => {
  const helloAssoMembers = await fetchHelloAssoMembers();
  console.log(`Members subscription: ${JSON.stringify(helloAssoMembers, null, 2)}`);
  const membersToUpsert = formatHelloAssoMembersForDb(helloAssoMembers);
  const upsertResult = await getRepository(Member)
    .createQueryBuilder()
    .insert()
    .into(Member)
    .values(membersToUpsert)
    .orUpdate(["updated_at", "birth_date", "phone", "job_study", "last_subscription_date"], ["email", "first_name"])
    .execute();
  console.log(`Upserted ${JSON.stringify(upsertResult, null, 2)} members into DB`);
  return true;
};
