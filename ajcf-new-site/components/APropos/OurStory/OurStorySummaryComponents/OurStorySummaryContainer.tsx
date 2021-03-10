import React from "react";
import styles from "../OurStory.module.scss";

const summaryContent = [
  `L'AJCF est avant tout une histoire, celle d'une jeunesse issue de cette France nouvelle : diversité culturelle, engagement citoyen, échanges libres sur les réseaux sociaux.`,
  `Née en 2009, l'association est issue de la réunion d'un groupe d'amis qui partageaint un idéal commun : créer un espace indépendant et ouvert aux personnes intéressées par la culture chinoise, l'histoire de l'immigration chinoise en France, ou encore toute question d'actualité en rapport avec cette communauté.`,
  `Dans ce cadre unique, l'AJCF a progressivement pris form au travers d'interventions médiatiques, de ses activités, ses conférences, ainsi que ses partenariats publics et associatifs.`,
];

export const OurStorySummaryContainer = () => {
  return (
    <section className={styles.summarySection}>
      <h1>Notre histoire</h1>
      <h2>Il était une fois l'AJCF</h2>
      {summaryContent.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
};
