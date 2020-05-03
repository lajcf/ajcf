import { getRepository } from "typeorm";
import { Member } from "../../../../entities/Member";

export const toggleWelcomeMailSent = (member: Member): Member => ({
  ...member,
  welcomeMailSent: !member.welcomeMailSent,
});

export const toggleWelcomeMailsSent = async (newMembers: Member[]) => {
  await getRepository(Member).save(newMembers.map(toggleWelcomeMailSent));
};
