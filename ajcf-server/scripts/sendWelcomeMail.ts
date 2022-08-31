import { sendWelcomeMail } from "../src/services/members/mutations/sendWelcomeMails/sendWelcomeMail";

export const sendWelcomeMailScript = async () => {
  // @ts-ignore
  await sendWelcomeMail({
    email: "john.doe@email.com",
    firstName: "John",
  });
};

sendWelcomeMailScript();
