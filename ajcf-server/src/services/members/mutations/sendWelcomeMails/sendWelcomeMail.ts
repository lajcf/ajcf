import { Member } from "../../../../entities/Member";
import { sendEmail } from "./sendEmail";
import { welcomeMail } from "./assets/welcomeMail";
import { brochureAJCF } from "./assets/brochureAJCF";

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
    HTMLPart: welcomeMail,
    Attachments: [
      {
        ContentType: "application/pdf",
        Base64Content: brochureAJCF,
        Filename: "Présentation de l'AJCF.pdf",
      },
    ],
  });
};
