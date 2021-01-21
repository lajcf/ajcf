import React from "react";
import { GetStaticProps } from "next";
import styles from "../../components/APropos/Press/Press.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Summary } from "../../components/APropos/Press/Summary";
import { MostRecentPressFiles } from "../../components/APropos/Press/MostRecent";
import { PressReview } from "../../components/APropos/Press/PressReview";
import { PressReleases } from "../../components/APropos/Press/PressReleases";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { AssetLabel, PressFileFragment } from "../../types/types";

const selectPressFiles = (pressFiles: PressFileFragment[], label: AssetLabel): PressFileFragment[] => {
  return pressFiles.filter((pressFile) => pressFile.assetLabel.includes(label));
};

export default ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <Layout className={styles.layout}>
      <Summary />
      <MostRecentPressFiles pressFiles={pressFiles} />
      <PressReview pressFiles={selectPressFiles(pressFiles, AssetLabel.PressReview)} />
      <PressReleases pressFiles={selectPressFiles(pressFiles, AssetLabel.PressRelease)} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const pressFilesResult = await graphqlClient.pressFilesQuery();
  return {
    props: {
      pressFiles: pressFilesResult.assets,
    },
  };
};
