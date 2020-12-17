import React from "react";
import styles from "../../components/APropos/Press/Press.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Summary } from "../../components/APropos/Press/SummaryComponents/Summary";
import { MostRecentPressFiles } from "../../components/APropos/Press/MostRecentComponents/MostRecent";
import { PressReview } from "../../components/APropos/Press/PressReviewComponents/PressReview";
import { Dispatches } from "../../components/APropos/Press/DispatchesComponents/Dispatches";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { GetStaticProps } from "next";
import { PressFilesQueryQuery } from "../../types/types";

export default function Press({ pressFiles }: { pressFiles: PressFilesQueryQuery }) {
  return (
    <Layout>
      <main className={styles.press}>
        <Summary />
        <MostRecentPressFiles pressFiles={pressFiles} />
        <PressReview pressFiles={pressFiles} />
        <Dispatches pressFiles={pressFiles} />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const pressFiles = await graphqlClient.pressFilesQuery();
  return {
    props: {
      pressFiles,
    },
  };
};
