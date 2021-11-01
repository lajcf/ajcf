import { capitalize, orderBy, uniqBy } from "lodash";
import { HelloAssoSoldItem } from "../resources";
import { Member } from "../../../../entities/Member";
import dayjs from "../../../../utils/dayjs";

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

const keepLastSubscriptions = (helloAssoMembers: HelloAssoSoldItem[]) => {
  const orderedHelloAssoMembers = orderBy(helloAssoMembers, (member) => dayjs.utc(member.order.date).toDate(), "desc");
  return uniqBy(
    orderedHelloAssoMembers,
    (member) => `${member.payer.email.toLowerCase()}-${capitalize(member.payer.firstName)}`
  );
};

export const mapHelloAssoItemsToMembers = (helloAssoMembers: HelloAssoSoldItem[]): Partial<Member>[] => {
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
