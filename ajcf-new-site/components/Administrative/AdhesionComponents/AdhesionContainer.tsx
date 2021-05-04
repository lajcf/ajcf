import React from "react";
import { Layout } from "../../Layout/Layout";
import styles from "./Adhesion.module.scss";
import { AdhesionAdvantages } from "./AdhesionAdvantages";
import { HelloAssoAdhesion } from "./HelloAssoAdhesion";

export const AdhesionContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Adhérer pour rejoindre notre communauté</h1>
        <p>
          L'AJCF est un lieu d'échanges et de solidarité, mais aussi un acteur sur le plan culturel et social. Adhérer à
          l’AJCF, c’est manifester son soutien à notre association et aux idéaux que nous portons.
        </p>
      </section>
      <AdhesionAdvantages />
      <section>
        <p>
          En effet, la vie de l’AJCF repose uniquement sur l’énergie et le temps accordés par ses bénévoles. Plus nous
          serons nombreux à contribuer à l’association pour atteindre nos objectifs, plus nos actions seront efficaces
          et auront de l’impact sur la société.
        </p>
        <p>
          Si toi aussi, tu souhaites apporter une pierre à l’édifice à l’AJCF, rejoins-nous en t'inscrivant ci-dessous
        </p>
      </section>
      <HelloAssoAdhesion />
    </Layout>
  );
};
