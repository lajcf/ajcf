import React from "react";
import styles from "./Antennes.module.scss";

const textContent = `Avec notre première antenne AJCF à Lyon lancée en septembre 2020, l’AJCF offre la possibilité aux personnes motivées d’ouvrir une antenne dans leur ville natale. Pour cela, il vous suffit de nous contacter sur notre formulaire contact et nous proposer vos projets !`;

export const Text = () => {
  return <p className={styles.text}>{textContent}</p>;
};
