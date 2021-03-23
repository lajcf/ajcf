import React from "react";
import { Layout } from "../../../Layout/Layout";
import { EducationPartnersLogos } from "./EducationPartnersLogos";
import styles from "./EducationAJCF.module.scss";

export const EducationAJCFContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Education AJCF</h1>
        <h2>Sensibiliser et lutter contre les discrimminations et le racisme anti-asiatique</h2>
        <p>
          Le pôle Education réalise des interventions en milieu scolaire pour sensibiliser la jeunesse à l’histoire de
          l’immigration des Asiatiques, favoriser le dialogue multiculturel et intergénérationnel, et déconstruire les
          stéréotypes, afin de promouvoir le bien vivre-ensemble.
        </p>
        <p>
          Plusieurs programmes d’interventions ont déjà été construits et d’autres sont en cours de construction. Ils
          peuvent prendre différentes formes comme l’organisation de projections-débats, du théâtre forum, des ateliers
          d’écriture, des ateliers de dessin, des rencontres avec des artistes et des influenceurs...
        </p>
      </section>
      <section className={styles.ourPartnersSection}>
        <h2>Nos partenaires</h2>
        <p>
          Ces différentes interventions sont soutenues par nos partenaires institutionnels qui reconnaissent
          l’importance de la prévention dans les écoles : l’Education Nationale, la DILCRAH, la Région IDF, et la mairie
          de Paris.
        </p>
        <EducationPartnersLogos />
      </section>
      <section className={styles.joinUsSection}>
        <h2>Nous rejoindre</h2>
        <p>
          Intéressé(e) par nos événements et le monde du débat et des idées ? Contactez l’équipe en charge de ce projet
          en contactant contact @lajcf.fr
        </p>
      </section>
    </Layout>
  );
};
