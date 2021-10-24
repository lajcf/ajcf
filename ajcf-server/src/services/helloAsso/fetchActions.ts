/* eslint-disable no-await-in-loop,immutable/no-let */
import axios from "axios";
import { orderBy } from "lodash";
import { GET_ACTIONS_URL, HelloAssoAction, HelloAssoActionType, RESULTS_PER_PAGE } from "./resources";

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

  try {
    let actionsFetched: HelloAssoAction[] = [];
    let currentActionsFetched: HelloAssoAction[] = [];
    let pageIndex = 1;
    while (
      pageIndex === 1 ||
      // it seems HelloAsso's API returns every action even if RESULTS_PER_PAGE is specified...
      (currentActionsFetched.length !== 0 && currentActionsFetched.length <= RESULTS_PER_PAGE)
    ) {
      const result = await axios.get<HelloAssoActionsQueryResponse>(
        GET_ACTIONS_URL({
          campaignId: args.campaignId,
          pageIndex,
          resultsPerPage: RESULTS_PER_PAGE,
          actionType: args.actionType,
        }),
        {
          headers: {
            Authorization: `Basic ${encodedAuth}`,
          },
        }
      );
      currentActionsFetched = result.data.resources;
      actionsFetched = [...actionsFetched, ...currentActionsFetched];
      pageIndex += 1;
    }

    return orderBy(actionsFetched, (a) => a.date, "desc");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
