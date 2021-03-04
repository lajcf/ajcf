import React from "react";
import styles from "./HomeEspaces.module.scss";
import { HomeEspacesDescriptions } from "./HomeEspacesDescriptions";

const titleContent = "S'exprimer à travers nos 4 espaces";
const textContent = `L’AJCF, c’est 4 valeurs à travers 4 espaces "Talk Learn Meet Enjoy" en 1 slogan "Tout Le Monde Ensemble"`;
export const HomeEspacesContainer = () => {
  return (
    <section className={styles.espaces}>
      <h2>{titleContent}</h2>
      <p>{textContent}</p>
      <HomeEspacesDescriptions />
    </section>
  );
};
