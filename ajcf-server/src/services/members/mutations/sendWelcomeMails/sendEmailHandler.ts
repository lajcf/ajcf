import mailjet from "node-mailjet";

const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY!, process.env.MAILJET_API_SECRET!);

interface EmailPayload {
  recipient: {
    Email: string;
    Name: string;
  };
  Subject: string;
  TextPart?: string;
  HTMLPart: string;
}

export const sendEmail = (emailPayload: EmailPayload) => {
  return mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "bureau@lajcf.fr",
          Name: "Association des Jeunes Chinois de France",
        },
        To: [emailPayload.recipient],
        Subject: emailPayload.Subject,
        TextPart: emailPayload.TextPart,
        HTMLPart: emailPayload.HTMLPart,
      },
    ],
  });
};
