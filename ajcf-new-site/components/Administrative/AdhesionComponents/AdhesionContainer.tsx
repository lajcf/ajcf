import React from "react";
import { Layout } from "../../Layout/Layout";
import styles from "./Adhesion.module.scss";
import { AdhesionAdvantages } from "./AdhesionAdvantages";
import { HelloAssoAdhesion } from "./HelloAssoAdhesion";

export const AdhesionContainer = () => {
  return (
    <Layout>
      <section className={styles.summarySection}>
        <h1>Adhérer pour rejoindre notre communauté</h1>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      <AdhesionAdvantages />
      <HelloAssoAdhesion />
    </Layout>
  );
};
