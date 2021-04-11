import React from "react";
import { GetStaticProps } from "next";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { PressFileFragment } from "../../types/types";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { PressContainer } from "../../components/APropos/Press/PressContainer";

export default function Press({ pressFiles }: { pressFiles: PressFileFragment[] }) {
  return <PressContainer pressFiles={pressFiles} />;
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const pressFilesResult = await graphqlClient.pressFilesQuery({ stage: mapEnvToStage() });
  return {
    props: {
      pressFiles: pressFilesResult.assets,
    },
  };
};
