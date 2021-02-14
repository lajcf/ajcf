import axios from "axios";
import { orderBy } from "lodash";
import { GET_ACTIONS_URL, HelloAssoAction, HelloAssoActionType } from "./resources";

interface GetActionsInterface {
  campaignId: string;
  actionType?: HelloAssoActionType;
}

interface HelloAssoActionsQueryResponse {
  resources: HelloAssoAction[];
}

export const fetchActions = async (args: GetActionsInterface): Promise<HelloAssoAction[]> => {
  const encodedAuth = Buffer.from(`${process.env.HELLOASSO_USERNAME}:${process.env.HELLOASSO_PASSWORD}`).toString(
    "base64"
  );
  const url = GET_ACTIONS_URL(args.campaignId, args.actionType);

  try {
    const result = await axios.get<HelloAssoActionsQueryResponse>(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return orderBy(result.data.resources, (a) => a.date, "desc");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
