import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailjet/sendEmail";
import { TEMPLATE_WELCOME } from "../../../../constants";

export const sendWelcomeMail = async (member: Member) => {
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
    Subject: "Bienvenue à l'AJCF !",
    TemplateID: TEMPLATE_WELCOME,
  });
};
