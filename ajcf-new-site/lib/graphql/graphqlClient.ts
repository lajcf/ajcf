import { GraphQLClient, request } from "graphql-request";
import { DocumentNode } from "graphql";
import { Variables } from "graphql-request/dist/types";
import { getSdk } from "../../types/types";

const graphcmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string, {
  headers: {
    authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN as string,
  },
});

export const graphqlRequest = (query: DocumentNode, variables: Variables) =>
  request(process.env.NEXT_PUBLIC_GRAPHCMS_URL!, query, variables);

export const graphqlClient = getSdk(graphcmsClient);

/* export const graphqlRequest = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> => {
  return graphcmsClient.request(operation, variables);
}; */
