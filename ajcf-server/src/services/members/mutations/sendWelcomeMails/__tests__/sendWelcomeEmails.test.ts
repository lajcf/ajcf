/* eslint-disable @typescript-eslint/no-var-requires */
import { sendWelcomeMails } from "../sendWelcomeMails";
import { Member } from "../../../../../entities/Member";

jest.mock("../sendWelcomeMail");
const { sendWelcomeMail } = require("../sendWelcomeMail");

jest.mock("../toggleWelcomeMailsSent");
const { toggleWelcomeMailsSent } = require("../toggleWelcomeMailsSent");

describe("sendEmailHandler", () => {
  test("sendEmailHandler", async () => {
    // sendWelcomeMail.mockImplementation((member: Member) => console.log("hahaha", member));
    // @ts-ignore
    const members = [
      {
        email: "john@doe.com",
        welcomeMailSent: 0,
      },
      {
        email: "john@foe.com",
        welcomeMailSent: 0,
      },
      {
        email: "jane@doe.com",
        welcomeMailSent: 1,
      },
    ] as Member[];
    await sendWelcomeMails(members);
    expect(sendWelcomeMail.mock.calls[0][0]).toEqual({
      email: "john@doe.com",
      welcomeMailSent: 0,
    });
    expect(sendWelcomeMail.mock.calls[1][0]).toEqual({
      email: "john@foe.com",
      welcomeMailSent: 0,
    });
    expect(toggleWelcomeMailsSent).toHaveBeenNthCalledWith(1, [
      {
        email: "john@doe.com",
        welcomeMailSent: 0,
      },
      {
        email: "john@foe.com",
        welcomeMailSent: 0,
      },
    ]);
  }, 15000);
});
