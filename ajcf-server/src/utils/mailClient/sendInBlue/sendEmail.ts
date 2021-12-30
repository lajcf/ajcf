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
  if (process.env.ENV !== "prod") {
    console.log("DEV: do not send email.");
    return;
  }
  const to = emailTo.map((email) => ({ name: attributes?.PRENOM, email }));

  sdk.ApiClient.instance.authentications["api-key"].apiKey = process.env.SENDINBLUE_API_KEY;

  new sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      templateId,
      sender: { email: "contact@lajcf.fr", name: "L'équipe de l'AJCF" },
      replyTo: { email: "contact@lajcf.fr", name: "L'équipe de l'AJCF" },
      to,
      params: {
        PRENOM: attributes?.PRENOM || undefined,
      },
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
