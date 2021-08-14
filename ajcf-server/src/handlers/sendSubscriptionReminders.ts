import { getRepository } from "typeorm";
import { Member } from "../entities/Member";

export const sendSubscriptionReminders = async () => {
  const outdatedMembers = await getRepository(Member).find({ where: {} });
  console.log(outdatedMembers);
};

export const handler = async () => {
  await sendSubscriptionReminders();
};
