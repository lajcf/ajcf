import React from "react";
import { GetStaticProps } from "next";
import { orderBy } from "lodash";
import styles from "../../components/APropos/Press/Press.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Summary } from "../../components/APropos/Press/Summary";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { AssetLabel, PressFileFragment } from "../../types/types";
import { PressFiles } from "../../components/APropos/Press/PressFiles";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";

const selectPressFiles = (pressFiles: PressFileFragment[], label: AssetLabel): PressFileFragment[] => {
  return pressFiles.filter((pressFile) => pressFile.assetLabel.includes(label));
};

export const selectMostRecentPressFiles = (pressFiles: PressFileFragment[]) => {
  return orderBy(pressFiles, "updatedAt", "desc").slice(0, 3);
};

export default ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <Layout className={styles.layout}>
      <Summary />
      <PressFiles pressFiles={selectMostRecentPressFiles(pressFiles)} title="Les plus récents" />
      <PressFiles pressFiles={selectPressFiles(pressFiles, AssetLabel.PressReview)} title="Revue de presse" />
      <PressFiles pressFiles={selectPressFiles(pressFiles, AssetLabel.PressRelease)} title="Communiqués" />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const pressFilesResult = await graphqlClient.pressFilesQuery({ stage: mapEnvToStage(process.env.ENV) });
  return {
    props: {
      pressFiles: pressFilesResult.assets,
    },
  };
};
