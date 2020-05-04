import mailjet, { Email } from "node-mailjet";
import { fetchAwsSecret } from "../../../../utils/fetchAwsSecret";

export const sendEmail = async (emailPayload: Email.SendParamsMessage) => {
  const mailjetCredentials = await fetchAwsSecret<{ MAILJET_API_KEY: string; MAILJET_API_SECRET: string }>(
    "MAILJET_CREDENTIALS"
  );
  const mailjetClient = mailjet.connect(mailjetCredentials.MAILJET_API_KEY, mailjetCredentials.MAILJET_API_SECRET);
  return mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [emailPayload],
  });
};
