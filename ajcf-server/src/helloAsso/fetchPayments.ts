import axios from "axios";
import { GET_PAYMENTS_URL, HelloAssoPayment, HelloAssoPaymentType } from "./resources";
import { fetchAwsSecret } from "../utils/fetchAwsSecret";

interface FetchPaymentsInterface {
  campaignId: string;
  actionType?: HelloAssoPaymentType;
}

export const fetchPayments = async (args: FetchPaymentsInterface): Promise<HelloAssoPayment[]> => {
  const helloAssoCredentials = await fetchAwsSecret<{ USER_AJCF: string; PASSWORD_AJCF: string }>(
    "HELLOASSO_CREDENTIALS"
  );
  const encodedAuth = Buffer.from(`${helloAssoCredentials.USER_AJCF}:${helloAssoCredentials.PASSWORD_AJCF}`).toString(
    "base64"
  );
  const url = GET_PAYMENTS_URL(args.campaignId, args.actionType);
  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
