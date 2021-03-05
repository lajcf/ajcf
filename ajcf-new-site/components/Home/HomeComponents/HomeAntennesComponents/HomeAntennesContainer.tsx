import React from "react";
import styles from "./HomeAntennes.module.scss";

const textContent = `Avec notre première antenne AJCF à Lyon lancée en septembre 2020, l’AJCF offre la possibilité aux personnes motivées d’ouvrir une antenne dans leur ville natale. Pour cela, il vous suffit de nous contacter sur notre formulaire contact et nous proposer vos projets !`;
export const HomeAntennesContainer = () => {
  return (
    <section className={styles.homeAntennesSection}>
      <h1 className="chineseScript chineseHeading">部门</h1>
      <div className="capsHeading">Les antennes AJCF</div>
      <h2>Créer des espaces de discussions partout en France</h2>
      <p>{textContent}</p>
      <div className={styles.buttons}>
        <button type="button" className="secondary-button">
          En savoir plus sur l'Antenne Lyon
        </button>
        <button type="button">Nous contacter</button>
      </div>
    </section>
  );
};
