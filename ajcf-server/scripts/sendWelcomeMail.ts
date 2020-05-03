import { sendWelcomeMail } from "../src/services/members/mutations/sendWelcomeMails/sendWelcomeMail";

export const sendWelcomeMailScript = async () => {
  // @ts-ignore
  await sendWelcomeMail({
    email: "nicolas.li@hotmail.fr",
    firstName: "Nicolas",
  });
};

sendWelcomeMailScript();
