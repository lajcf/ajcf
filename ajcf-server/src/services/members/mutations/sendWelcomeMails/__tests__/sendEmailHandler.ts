import { sendEmail } from "../sendEmailHandler";

describe("sendEmailHandler", () => {
  test("sendEmailHandler", async () => {
    await sendEmail({
      recipient: {
        Email: "nicolas.li@hotmail.fr",
        Name: "Flopette",
      },
      Subject: "Bouh!",
      TextPart: "Houb!",
      HTMLPart: `Ma Laeti chérie, si tu reçois ce mail, cela signifie que le système d'envoi de mail automatique fonctionne à merveille ❤️`,
    });
  }, 10000);
});
