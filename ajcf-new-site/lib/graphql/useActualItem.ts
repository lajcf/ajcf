import useSWR from "swr";
import { print } from "graphql/language/printer";
import { DocumentNode } from "graphql";
import { mapEnvToStage } from "../utils/mapEnvToStage";
import { graphqlRequest } from "./graphqlClient";

export const useActualItem = <T extends { id: string }>(query: DocumentNode, originalItem: T) => {
  const { data: updatedItem, error } = useSWR<T | null>(
    [
      print(query),
      {
        id: originalItem.id,
        stage: mapEnvToStage(),
      },
    ],
    graphqlRequest,
    {
      initialData: originalItem,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  return { updatedItem, error };
};
