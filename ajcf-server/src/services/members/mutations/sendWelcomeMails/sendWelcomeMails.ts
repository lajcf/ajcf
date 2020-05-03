import { Member } from "../../../../entities/Member";
import { toggleWelcomeMailsSent } from "./toggleWelcomeMailsSent";
import { sendWelcomeMail } from "./sendWelcomeMail";

export const sendWelcomeMails = async (members: Member[]) => {
  const newMembers = members.filter((member) => !member.welcomeMailSent);
  await Promise.all(newMembers.map(sendWelcomeMail));
  await toggleWelcomeMailsSent(newMembers);
  console.log(`${newMembers.length} welcome mails sent!`);
  return true;
};
