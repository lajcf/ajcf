import React from "react";
import styles from "./Summary.module.scss";

const titleContent = `Qui sommes-nous?`;
const subTitleContent = `Il était une fois l'AJCF`;
const paragraph01Content = `L'AJCF est avant tout une histoire, celle d'une jeunesse issue de cette France nouvelle : diversité culturelle, engagement citoyen, échanges libres sur les réseaux sociaux.`;
const paragraph02Content = `Née en 2009, l'association est issue de la réunion d'un groupe d'amis qui partageaint un idéal commun : créer un espace indépendant et ouvert aux personnes intéressées par la culture chinoise, l'histoire de l'immigration chinoise en France, ou encore toute question d'actualité en rapport avec cette communauté.`;
const paragraph03Content = `Dans ce cadre unique, l'AJCF a progressivement pris form au travers d'interventions médiatiques, de ses activités, ses conférences, ainsi que ses partenariats publics et associatifs.`;

export const Text = () => {
  return (
    <article>
      <h1>{titleContent}</h1>
      <h2>{subTitleContent}</h2>
      <p>{paragraph01Content}</p>
      <p>{paragraph02Content}</p>
      <p>{paragraph03Content}</p>
    </article>
  );
};
