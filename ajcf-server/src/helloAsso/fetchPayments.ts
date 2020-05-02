import axios from "axios";
import { GET_PAYMENTS_URL, HelloAssoPayment, HelloAssoPaymentType, } from "./resources";

interface FetchPaymentsInterface {
  campaignId: string;
  actionType?: HelloAssoPaymentType;
}

export const fetchPayments = async (
  args: FetchPaymentsInterface
): Promise<HelloAssoPayment[]> => {
  const url = GET_PAYMENTS_URL(args.campaignId, args.actionType);
  const encodedAuth = Buffer.from(
    `${process.env.USER_AJCF}:${process.env.PASSWORD_AJCF}`
  ).toString("base64");
  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data;
  } catch (e) {
    return e;
  }
};
