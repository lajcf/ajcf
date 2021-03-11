import React from "react";
import { Layout } from "../../../Layout/Layout";
import { AntennaAJCFLyon } from "./AntennaAJCFLyon";
import { AntennaNewsComponent } from "./AntennaNewsComponent";
import { AntennaUpcomingEvents } from "./AntennaUpcomingEvents";
import styles from "./OurAntennas.module.scss";

export const OurAntennasContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Nos Antennes</h1>
        <h2>Créer des espaces de discussions partout en France</h2>
        <p>
          L’AJCF se développe également en dehors de Paris et de l’Ile-De-France, à travers ses antennes. Lyon, une
          ville jeune, dynamique et solidaire, mais deuxième foyer des communautés d’origine chinoise en France, a
          naturellement été choisie pour ouvrir la première antenne de l’AJCF.
        </p>
      </section>
      <AntennaAJCFLyon />
      <AntennaNewsComponent />
      <AntennaUpcomingEvents />
      <section className={styles.antennaJoinUsSection}>
        <h2>Nous rejoindre</h2>
        <p className="texte1">
          Intéressé(e) par nos événements et le monde du débat et des idées ? Contactez l’équipe en charge de ce projet
          en contactant contact@lajcf.fr
        </p>
      </section>
    </Layout>
  );
};
