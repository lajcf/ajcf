import React from "react";
import styles from "./HomeEducation.module.scss";

const homeEducationCards = [
  {
    id: 1,
    title: "Interventions scolaires",
    subTitle: "En partenariat avec le Ministère de l'Éducation",
    content: "yo",
  },
  {
    id: 2,
    title: "Parcours de Vie",
    subTitle: "En partenariat avec SOS Racisme",
    content: "ya",
  },
];
export const HomeEducationCards = () => {
  return (
    <section className={styles.cardsSection}>
      <ul>
        {homeEducationCards.map((card) => (
          <li key={card.id}>
            <div className={styles.cardText}>
              <h3>{card.title}</h3>
              <h4>{card.subTitle}</h4>
              <p>{card.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
