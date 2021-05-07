import useSWR from "swr";
import { print } from "graphql/language/printer";
import { DocumentNode } from "graphql";
import { mapEnvToStage } from "../utils/mapEnvToStage";
import { graphqlRequest } from "./graphqlClient";

/**
 * Our own implementation of useSWR, which can be improved
 * @param query graphql query generated in types.ts
 * @param initialData: of the form {[key: string]: {id: string}}
 * @param initialItemId: contained in initialData but must be passed since the key is not known by this function
 */
export const useActualItem = <T>(query: DocumentNode, initialData: T, initialItemId: string) => {
  const variables = {
    id: initialItemId,
    stage: mapEnvToStage(),
  };
  const { data: actualItem, error } = useSWR<T>(
    JSON.stringify([print(query), variables]), // WARNING: must stringify since {} !== {}, meaning swr will trigger an infinite loop if not stringified
    () => graphqlRequest(query, variables),
    {
      initialData,
      shouldRetryOnError: false,
      focusThrottleInterval: 2000, // revalidate interval >= 2s
    }
  );
  return { actualItem, error };
};
