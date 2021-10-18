import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailClient/sendEmail";
import { TEMPLATE_SUBSCRIPTION_REMINDER } from "../../../../constants";

export const sendSubscriptionReminder = async (member: Member) => {
  await sendEmail({
    attributes: {
      PRENOM: member.firstName,
    },
    emailTo: [member.email],
    emailBcc: ["nicolas.li@hotmail.fr"],
    emailCc: [],
    templateId: TEMPLATE_SUBSCRIPTION_REMINDER,
  });
  return member;
};
