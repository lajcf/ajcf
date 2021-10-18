// eslint-disable-next-line @typescript-eslint/no-var-requires
const sdk = require("sib-api-v3-sdk");

type EmailPayload = {
  templateId: number;
  emailTo: string[];
  emailBcc: string[];
  emailCc: string[];
  attributes?: { PRENOM?: string; NOM?: string };
};

export const sendEmail = async ({ templateId, emailBcc, emailTo, emailCc, attributes }: EmailPayload) => {
  const to =
    process.env.ENV === "prod"
      ? emailTo.map((email) => [{ name: attributes?.PRENOM, email }])
      : [{ name: attributes?.PRENOM, email: "nicolas.li@hotmail.fr" }];

  sdk.ApiClient.instance.authentications["api-key"].apiKey = process.env.SENDINBLUE_API_KEY;

  new sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      templateId,
      sender: { email: "contact@lajcf.fr", name: "L'équipe de l'AJCF" },
      replyTo: { email: "contact@lajcf.fr", name: "L'équipe de l'AJCF" },
      to,
      cc: emailCc.length ? emailCc.map((email) => ({ email })) : undefined,
      bcc: emailBcc.length ? emailBcc.map((email) => ({ email })) : undefined,
    })
    .then(
      (data: any) => {
        console.log("Email sent successfully with response: ", data);
      },
      (error: any) => {
        console.log("Error: ", error);
        throw error;
      }
    );
};
