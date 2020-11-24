import React from "react";
import styles from "./Education.module.scss";

const interventions = [
  {
    className: `${styles.education}`,
    title: `Interventions scolaires`,
    text: `Ministère de l'Éducation`,
  },
  {
    className: `${styles.sos}`,
    title: `Parcours de vie`,
    text: `Sos Racisme`,
  },
  {
    className: `${styles.respect}`,
    title: `Cyberharcèlement`,
    text: `Respect Zone`,
  },
  {
    className: `${styles.prefectures}`,
    title: `Nom de projet`,
    text: `Nom du partenaire`,
  },
];

export const Cards = () => {
  return (
    <ul className={styles.cards}>
      {interventions.map((intervention) => (
        <li key={intervention.className} className={`${intervention.className} ${styles.card}`}>
          <div className={styles.card__Content}>
            <h3>{intervention.title}</h3>
            <p>{intervention.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
