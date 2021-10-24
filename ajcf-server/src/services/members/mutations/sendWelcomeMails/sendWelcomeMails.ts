import { Member } from "../../../../entities/Member";
import { toggleWelcomeMailsSent } from "./toggleWelcomeMailsSent";
import { sendWelcomeMail } from "./sendWelcomeMail";
import { isFullfilled, isRejected } from "../../../../utils/promiseUtils";

export const sendWelcomeMails = async (members: Member[]) => {
  const newMembers = members.filter((member) => !member.welcomeMailSent);
  try {
    const result = await Promise.allSettled(newMembers.map(sendWelcomeMail));
    console.log("Promise results: ", JSON.stringify(result, null, 2));
    const failures = result.filter(isRejected);
    const success = result.filter(isFullfilled);
    if (failures.length) {
      console.log(`Some promises failed: ${failures.map((fail) => fail.reason)}`);
    }
    console.log(
      `Send welcome mails to ${success.length} members: ${success.map(
        (member) => `${member.value.firstName} ${member.value.lastName}`
      )}`
    );
  } catch (e) {
    console.log(
      "An error happened while sending welcome emails, activities will be created to avoid spamming members."
    );
  }
  await toggleWelcomeMailsSent(newMembers);
  console.log(`${newMembers.length} were toggled with welcome email sent!`);
  return true;
};
