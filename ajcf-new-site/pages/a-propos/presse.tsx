import React from "react";
import { Dispatches } from "../../components/APropos/Press/DispatchesComponents/Dispatches";
import { MostRecent } from "../../components/APropos/Press/MostRecentComponents/MostRecent";
import styles from "../../components/APropos/Press/Press.module.scss";
import { PressReview } from "../../components/APropos/Press/PressReviewComponents/PressReview";
import { Summary } from "../../components/APropos/Press/SummaryComponents/Summary";
import { Layout } from "../../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      <main className={styles.press}>
        <Summary />
        <MostRecent />
        <PressReview />
        <Dispatches />
      </main>
    </Layout>
  );
};
