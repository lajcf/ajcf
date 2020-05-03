import axios from "axios";
import { GET_ACTIONS_URL, HelloAssoAction, HelloAssoActionType } from "./resources";
import { fetchAwsSecret } from "../utils/fetchAwsSecret";

interface GetActionsInterface {
  campaignId: string;
  actionType?: HelloAssoActionType;
}

interface HelloAssoActionsQueryResponse {
  resources: HelloAssoAction[];
}

export const fetchActions = async (args: GetActionsInterface): Promise<HelloAssoAction[]> => {
  const helloAssoCredentials = await fetchAwsSecret<{ USER_AJCF: string; PASSWORD_AJCF: string }>(
    "HELLOASSO_CREDENTIALS"
  );
  const encodedAuth = Buffer.from(`${helloAssoCredentials.USER_AJCF}:${helloAssoCredentials.PASSWORD_AJCF}`).toString(
    "base64"
  );
  const url = GET_ACTIONS_URL(args.campaignId, args.actionType);
  try {
    const result = await axios.get<HelloAssoActionsQueryResponse>(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data.resources;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
