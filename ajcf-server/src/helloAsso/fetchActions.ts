import axios from "axios";
import { GET_ACTIONS_URL, HelloAssoAction, HelloAssoActionType, } from "./resources";

interface GetActionsInterface {
  campaignId: string;
  actionType?: HelloAssoActionType;
}

interface HelloAssoActionsQueryResponse {
  resources: HelloAssoAction[];
}

export const fetchActions = async (
  args: GetActionsInterface
): Promise<HelloAssoAction[]> => {
  const url = GET_ACTIONS_URL(args.campaignId, args.actionType);
  const encodedAuth = Buffer.from(
    `${process.env.USER_AJCF}:${process.env.PASSWORD_AJCF}`
  ).toString("base64");
  try {
    const result = await axios.get<HelloAssoActionsQueryResponse>(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data.resources;
  } catch (e) {
    return e;
  }
};
