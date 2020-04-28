import { Member } from "../../../../entities/Member";
import { getRepository } from "typeorm";
import { sendEmail } from "./sendEmailHandler";

export const sendWelcomeMail = async (member: Member) => {
  await sendEmail({
    recipient: {
      Email: member.email,
      Name: member.firstName,
    },
    Subject: "My first Mailjet Email!",
    HTMLPart:
      '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
  });
};

export const toggleWelcomeMailSent = (member: Member): Member => ({
  ...member,
  welcomeMailSent: !member.welcomeMailSent,
});

export const sendWelcomeMails = async (members: Member[]) => {
  const newMembers = members.filter((member) => !member.welcomeMailSent);
  await Promise.all(newMembers.map(sendWelcomeMail));
  await getRepository(Member).save(newMembers.map(toggleWelcomeMailSent));
};
