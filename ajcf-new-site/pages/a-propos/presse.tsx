import React from "react";
import { GetStaticProps } from "next";
import styles from "../../components/APropos/Press/Press.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Summary } from "../../components/APropos/Press/SummaryComponents/Summary";
import { MostRecentPressFiles } from "../../components/APropos/Press/MostRecentComponents/MostRecent";
import { PressReview } from "../../components/APropos/Press/PressReviewComponents/PressReview";
import { PressReleases } from "../../components/APropos/Press/DispatchesComponents/PressReleases";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { Label, PressFileFragment } from "../../types/types";

const selectPressFiles = (pressFiles: PressFileFragment[], label: Label): PressFileFragment[] => {
  return pressFiles.filter((pressFile) => pressFile.labels.includes(label));
};

export default ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <Layout>
      <main className={styles.press}>
        <Summary />
        <MostRecentPressFiles pressFiles={pressFiles} />
        <PressReview pressFiles={selectPressFiles(pressFiles, Label.PressReview)} />
        <PressReleases pressFiles={selectPressFiles(pressFiles, Label.PressRelease)} />
      </main>
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
