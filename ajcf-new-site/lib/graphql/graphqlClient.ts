import { GraphQLClient } from "graphql-request";
import { getSdk } from "../../types/types";

const graphcmsClient = new GraphQLClient(process.env.GRAPHCMS_URL as string, {
  headers: {
    authorization: process.env.GRAPHCMS_TOKEN as string,
  },
});

export const graphqlClient = getSdk(graphcmsClient);

/* export const graphqlRequest = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> => {
  return graphcmsClient.request(operation, variables);
}; */
