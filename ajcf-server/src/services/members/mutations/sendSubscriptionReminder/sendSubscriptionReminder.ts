import { Member } from "../../../../entities/Member";
import { sendEmail } from "../../../mailjet/sendEmail";
import { welcomeMail } from "../sendWelcomeMails/assets/welcomeMail";
import { brochureAJCF } from "../sendWelcomeMails/assets/brochureAJCF";

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
    Subject: "Bienvenue à l'AJCF !",
    HTMLPart: welcomeMail(member.firstName),
    Attachments: [
      {
        ContentType: "application/pdf",
        Base64Content: brochureAJCF,
        Filename: "Présentation de l'AJCF.pdf",
      },
    ],
  });
};
