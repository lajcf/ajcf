// eslint-disable-next-line @typescript-eslint/no-var-requires
const sdk = require("sib-api-v3-sdk");

export const defaultClient = sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const sendInBlueClient = sdk;

export { sendInBlueClient };
