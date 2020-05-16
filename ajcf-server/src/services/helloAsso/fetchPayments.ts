import axios from "axios";
import { GET_PAYMENTS_URL, HelloAssoPayment, HelloAssoPaymentType } from "./resources";

interface FetchPaymentsInterface {
  campaignId: string;
  actionType?: HelloAssoPaymentType;
}

export const fetchPayments = async (args: FetchPaymentsInterface): Promise<HelloAssoPayment[]> => {
  const encodedAuth = Buffer.from(`${process.env.HELLOASSO_USERNAME}:${process.env.HELLOASSO_PASSWORD}`).toString(
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
