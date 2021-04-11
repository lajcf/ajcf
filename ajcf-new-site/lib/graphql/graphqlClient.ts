import { GraphQLClient } from "graphql-request";
import { DocumentNode } from "graphql";
import { Variables } from "graphql-request/dist/types";
import { getSdk } from "../../types/types";

const graphcmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!, {
  headers: {
    authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN!,
  },
});

export const graphqlRequest = (query: DocumentNode, variables: Variables) => graphcmsClient.request(query, variables);

export const graphqlClient = getSdk(graphcmsClient);

/* export const graphqlRequest = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> => {
  return graphcmsClient.request(operation, variables);
}; */
