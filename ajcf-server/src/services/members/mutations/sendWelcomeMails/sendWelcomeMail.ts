import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../../utils/mailClient/sendInBlue/sendEmail";

export const sendWelcomeMail = async (member: Member) => {
  await sendEmail({
    attributes: {
      PRENOM: member.firstName,
    },
    emailTo: [member.email],
    emailBcc: [],
    emailCc: [],
    templateId: parseInt(process.env.SEND_IN_BLUE_TEMPLATE_WELCOME_ID, 10),
  });
  return member;
};
