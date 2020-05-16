import mailjet, { Email } from "node-mailjet";

export const sendEmail = async (emailPayload: Email.SendParamsMessage) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not send email");
    return;
  }
  const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY!, process.env.MAILJET_API_SECRET!);
  return mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [emailPayload],
  });
};
