import React from "react";
import { Layout } from "../../../Layout/Layout";
import { OUR_ESPACES } from "../OurEspacesComponents/ourEspacesConfig";
import styles from "./WhoAreWe.module.scss";

const OurEspacesList = () => {
  return (
    <ul>
      {OUR_ESPACES.map((espace) => (
        <li key={espace.categoryName}>
          {espace.logo}
          <h3>Espace {espace.categoryName}</h3>
        </li>
      ))}
    </ul>
  );
};
export const WhoAreWeContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Qui sommes nous?</h1>
        <p>
          L’organisation des activités occupe la majeure partie de la vie de notre association. Les projets de l’AJCF
          sont divisés en différents pôles d’activité, regroupés dans 4 Espaces #TLME que nous allons détailler
          ci-dessous.
        </p>
      </section>
      <section className={styles.espacesSection}>
        <h3 className="capsHeading">Nos espaces</h3>
        <OurEspacesList />
      </section>
      <section className={styles.antennasSection}>
        <h3 className="capsHeading">Nos antennes</h3>
      </section>
      <section className={styles.educationSection}>
        <h3 className="capsHeading">Éducation AJCF</h3>
      </section>
    </Layout>
  );
};
