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
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      {OUR_ESPACES.map((espace) => (
        <Espace key={espace.categoryName} espaceContent={espace} />
      ))}
    </Layout>
  );
};
