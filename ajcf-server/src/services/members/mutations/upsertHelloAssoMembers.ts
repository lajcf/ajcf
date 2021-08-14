import { getRepository } from "typeorm";
import { capitalize, orderBy, uniqBy } from "lodash";
import { fetchCampaigns } from "../../helloAsso/fetchCampaigns";
import { fetchActions } from "../../helloAsso/fetchActions";
import { HelloAssoAction } from "../../helloAsso/resources";
import { Member } from "../../../entities/Member";
import dayjs from "../../../utils/dayjs";

export enum CustomInfoEnum {
  birthDate = "Date de naissance",
  phone = "Numéro de téléphone",
  jobStudy = "Profession / Etudes",
  motivation = "Pourquoi veux-tu rejoindre l'AJCF ?",
}

export const extractDateInfo = (member: HelloAssoAction, infoType: CustomInfoEnum): Date | null => {
  const date = member.custom_infos.find((e) => e.label === infoType);
  if (date) {
    const parsedDateInFrench = dayjs.utc(date.value, "DD/MM/YYYY");
    if (parsedDateInFrench.isValid()) return parsedDateInFrench.toDate();
    return dayjs.utc(date.value).toDate();
  }
  return null;
};

export const extractStringInfo = (member: HelloAssoAction, infoType: CustomInfoEnum): string | null => {
  const info = member.custom_infos.find((e) => e.label === infoType);
  return info ? info.value : null;
};

export const fetchHelloAssoMembers = async (): Promise<HelloAssoAction[]> => {
  const campaigns = await fetchCampaigns({ campaignType: "MEMBERSHIP" });
  if (campaigns.length === 0)
    throw new Error(`No membership campaign found for organismId ${process.env.ID_HELLOASSO_AJCF}`);
  console.log(`Membership campaign: ${JSON.stringify(campaigns, null, 2)}`);
  return fetchActions({
    campaignId: campaigns[0].id,
    actionType: "SUBSCRIPTION",
  });
};

const keepLastSubscriptions = (helloAssoMembers: HelloAssoAction[]) => {
  const orderedHelloAssoMembers = orderBy(helloAssoMembers, (member) => dayjs.utc(member.date).toDate(), "desc");
  return uniqBy(orderedHelloAssoMembers, (member) => `${member.email.toLowerCase()}-${capitalize(member.first_name)}`);
};

export const formatHelloAssoMembersForDb = (helloAssoMembers: HelloAssoAction[]): Partial<Member>[] => {
  const uniqueHelloAssoMembers = keepLastSubscriptions(helloAssoMembers);
  return uniqueHelloAssoMembers.map((helloAssoMember) => {
    return {
      createdAt: new Date(),
      updatedAt: dayjs.utc(helloAssoMember.date).toDate(),
      email: helloAssoMember.email.toLowerCase(),
      firstName: capitalize(helloAssoMember.first_name),
      lastName: capitalize(helloAssoMember.last_name),
      birthDate: extractDateInfo(helloAssoMember, CustomInfoEnum.birthDate),
      phone: extractStringInfo(helloAssoMember, CustomInfoEnum.phone),
      jobStudy: extractStringInfo(helloAssoMember, CustomInfoEnum.jobStudy),
      motivation: extractStringInfo(helloAssoMember, CustomInfoEnum.motivation),
      firstSubscriptionDate: dayjs.utc(helloAssoMember.date).toDate(),
      lastSubscriptionDate: dayjs.utc(helloAssoMember.date).toDate(),
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
    .orUpdate({
      conflict_target: ["email", "first_name"],
      overwrite: ["updated_at", "birth_date", "phone", "job_study", "last_subscription_date"],
    })
    .execute();
  console.log(`Upserted ${JSON.stringify(upsertResult, null, 2)} members into DB`);
  return true;
};
