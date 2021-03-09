import React from "react";
import styles from "./OurStory.module.scss";

const paragraph01Content = `L’AJCF est avant tout une histoire, celle d’une jeunesse issue de cette France nouvelle : diversité culturelle, engagement citoyen, échanges libres sur les réseaux sociaux.`;
const paragraph02Content = `Née en 2009, l’association est issue de la réunion d’un groupe d’amis qui partageaient un idéal commun : créer un espace indépendant et ouvert aux personnes intéressées par la culture chinoise, l’histoire de l’immigration chinoise en France, ou encore toute question d’actualité en rapport avec cette communauté.`;
const paragraph03Content = `Dans ce cadre unique, l’AJCF a progressivement pris forme au travers d’interventions médiatiques, de ses activités, ses conférences, ainsi que ses partenariats publics et associatifs.`;

export const Text = () => {
  return (
    <div className={styles.paragraphs}>
      <p className={styles.paragraph01}>{paragraph01Content}</p>
      <p className={styles.paragraph02}>{paragraph02Content}</p>
      <p className={styles.paragraph03}>{paragraph03Content}</p>
    </div>
  );
};
