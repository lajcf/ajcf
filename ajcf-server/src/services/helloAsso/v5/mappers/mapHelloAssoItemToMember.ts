import { capitalize, orderBy, uniqBy } from "lodash";
import { HelloAssoSoldItem } from "../resources";
import { Member } from "../../../../entities/Member";
import dayjs from "../../../../utils/dayjs";
import { HelloAssoOrder } from "../../../../types";

// eslint-disable-next-line no-shadow
export enum CustomInfoEnum {
  birthDate = "Date de naissance",
  phone = "Numéro de téléphone",
  jobStudy = "Profession / Etudes",
  motivation = "Pourquoi veux-tu rejoindre l'AJCF ?",
}

export const extractDateInfo = (
  customFields: HelloAssoSoldItem["customFields"] | undefined,
  infoType: CustomInfoEnum
): Date | null => {
  const date = customFields?.find((e) => e.name === infoType);
  if (date) {
    const parsedDateInFrench = dayjs.utc(date.answer, "DD/MM/YYYY");
    if (parsedDateInFrench.isValid()) {
      return parsedDateInFrench.toDate();
    }
    return dayjs.utc(date.answer).toDate();
  }
  return null;
};

export const extractStringInfo = (
  customFields: HelloAssoSoldItem["customFields"] | undefined,
  infoType: CustomInfoEnum
): string | null => {
  const info = customFields?.find((e) => e.name === infoType);
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
      birthDate: extractDateInfo(helloAssoMember.customFields, CustomInfoEnum.birthDate),
      phone: extractStringInfo(helloAssoMember.customFields, CustomInfoEnum.phone),
      jobStudy: extractStringInfo(helloAssoMember.customFields, CustomInfoEnum.jobStudy),
      motivation: extractStringInfo(helloAssoMember.customFields, CustomInfoEnum.motivation),
      firstSubscriptionDate: dayjs.utc(helloAssoMember.order.date).toDate(),
      lastSubscriptionDate: dayjs.utc(helloAssoMember.order.date).toDate(),
      activeMember: false,
    };
  });
};

export const mapHelloAssoOrdersToMembers = (helloAssoOrder: HelloAssoOrder) => {
  return helloAssoOrder.items.map((order) => ({
    createdAt: new Date(),
    updatedAt: dayjs.utc(helloAssoOrder.date).toDate(),
    email: helloAssoOrder.payer.email.toLowerCase(),
    firstName: capitalize(order.user.firstName),
    lastName: capitalize(order.user.lastName),
    birthDate: extractDateInfo(order.customFields, CustomInfoEnum.birthDate),
    phone: extractStringInfo(order.customFields, CustomInfoEnum.phone),
    jobStudy: extractStringInfo(order.customFields, CustomInfoEnum.jobStudy),
    motivation: extractStringInfo(order.customFields, CustomInfoEnum.motivation),
    firstSubscriptionDate: dayjs.utc(helloAssoOrder.date).toDate(),
    lastSubscriptionDate: dayjs.utc(helloAssoOrder.date).toDate(),
    activeMember: false,
  }));
};
