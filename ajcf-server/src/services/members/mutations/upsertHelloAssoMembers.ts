import moment from "moment";
import { getRepository } from "typeorm";
import { fetchCampaigns } from "../../helloAsso/fetchCampaigns";
import { fetchActions } from "../../helloAsso/fetchActions";
import { HelloAssoAction } from "../../helloAsso/resources";
import { Member } from "../../../entities/Member";

export enum CustomInfoEnum {
  birthDate = "Date de naissance",
  phone = "Numéro de téléphone",
  jobStudy = "Profession / Etudes",
  motivation = "Pourquoi veux-tu rejoindre l'AJCF ?",
}

export const getDateInfo = (member: HelloAssoAction, infoType: CustomInfoEnum): Date | null => {
  const date = member.custom_infos.find((e) => e.label === infoType);
  if (date) {
    const parsedDateInFrench = moment.utc(date.value, "DD/MM/YYYY");
    if (parsedDateInFrench.isValid()) return parsedDateInFrench.toDate();
    return moment.utc(date.value).toDate();
  }
  return null;
};

export const getStringInfo = (member: HelloAssoAction, infoType: CustomInfoEnum): string | null => {
  const info = member.custom_infos.find((e) => e.label === infoType);
  return info ? info.value : null;
};

export const formatMembers = (member: HelloAssoAction) => {
  return {
    id: parseInt(member.id, 10).toString(),
    firstName: member.first_name,
    lastName: member.last_name,
    birthDate: getDateInfo(member, CustomInfoEnum.birthDate),
    email: member.email,
    phone: getStringInfo(member, CustomInfoEnum.phone),
    jobStudy: getStringInfo(member, CustomInfoEnum.jobStudy),
    motivation: getStringInfo(member, CustomInfoEnum.motivation),
    firstSubscriptionDate: moment.utc(member.date).toDate(),
    lastSubscriptionDate: moment.utc(member.date).toDate(),
    activeMember: false,
  };
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

export const upsertHelloAssoMembers = async () => {
  const helloAssoMembers = await fetchHelloAssoMembers();
  console.log(`Members: ${JSON.stringify(helloAssoMembers, null, 2)}`);
  const insertedMembersToDb = await getRepository(Member).save(helloAssoMembers.map(formatMembers));
  console.log(`Upserted ${insertedMembersToDb.length} members into DB`);
  return true;
};
