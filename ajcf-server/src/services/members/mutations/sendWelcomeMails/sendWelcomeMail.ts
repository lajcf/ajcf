import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailClient/sendEmail";
import { TEMPLATE_WELCOME } from "../../../../constants";

export const sendWelcomeMail = async (member: Member) => {
  await sendEmail({
    attributes: {
      PRENOM: member.firstName,
    },
    emailTo: [member.email],
    emailBcc: ["nicolas.li@hotmail.fr"],
    emailCc: [],
    templateId: TEMPLATE_WELCOME,
  });
};
