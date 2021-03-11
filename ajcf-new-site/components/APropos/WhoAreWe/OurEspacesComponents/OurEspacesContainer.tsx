import React from "react";
import { Espace } from "./Espace";
import { OUR_ESPACES } from "./ourEspacesConfig";
import { Layout } from "../../../Layout/Layout";
import styles from "./OurEspaces.module.scss";

export const OurEspacesContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Nos espaces</h1>
        <ul>
          {OUR_ESPACES.map((espace) => (
            <li key={espace.categoryName}>
              <p>{espace.summaryText}</p>
            </li>
          ))}
        </ul>
      </section>
      <ul className={styles.espacesList}>
        {OUR_ESPACES.map((espace) => (
          <li key={espace.categoryName}>
            <Espace espaceContent={espace} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};
