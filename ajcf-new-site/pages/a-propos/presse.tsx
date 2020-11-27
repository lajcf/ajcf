import React from "react";
import { MostRecent } from "../../components/APropos/Press/MostRecent/MostRecent";
import styles from "../../components/APropos/Press/Press.module.scss";
import { Summary } from "../../components/APropos/Press/SummaryComponents/Summary";
import { Layout } from "../../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      <main className={styles.press}>
        <Summary />
        <MostRecent />
      </main>
    </Layout>
  );
};
