import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailClient/sendEmail";

export const sendSubscriptionReminder = async (member: Member) => {
  await sendEmail({
    attributes: {
      PRENOM: member.firstName,
    },
    emailTo: [member.email],
    emailBcc: ["nicolas.li@hotmail.fr"],
    emailCc: [],
    templateId: parseInt(process.env.TEMPLATE_SUBSCRIPTION_REMINDER_ID!, 10),
  });
  return member;
};
