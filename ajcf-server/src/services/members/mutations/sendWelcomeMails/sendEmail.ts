import mailjet, { Email } from "node-mailjet";

export const sendEmail = async (emailPayload: Email.SendParamsMessage) => {
  if (process.env.ENV !== "prod") return;
  const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY!, process.env.MAILJET_API_SECRET!);
  return mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [emailPayload],
  });
};
