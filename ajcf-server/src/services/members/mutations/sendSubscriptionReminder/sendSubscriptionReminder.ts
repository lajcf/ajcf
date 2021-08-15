import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailjet/sendEmail";
import { TEMPLATE_SUBSCRIPTION_REMINDER } from "../../../../constants";

export const sendSubscriptionReminder = async (member: Member) => {
  await sendEmail({
    To: [
      {
        Email: member.email,
        Name: member.firstName,
      },
    ],
    Bcc: [
      {
        Email: "nicolas.li@hotmail.fr",
        Name: "Nicolas",
      },
    ],
    From: {
      Email: "bureau@lajcf.fr",
      Name: "Association des Jeunes Chinois de France",
    },
    Subject: "Renouvellement d'adhésion",
    TemplateID: TEMPLATE_SUBSCRIPTION_REMINDER,
  });
  return member;
};
