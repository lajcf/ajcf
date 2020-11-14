import React from "react";
import styles from "./Interventions.module.scss";

const interventions = [
  {
    className: `${styles.education}`,
    title: `Sensibiliser les écoles`,
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
    title: `Aide aux victimes`,
    text: `Préfectures 93, 94, 95`,
  },
];

export const Cards = () => {
  return (
    <ul className={styles.cards}>
      {interventions.map((intervention) => (
        <li key={intervention.className} className={`${intervention.className} ${styles.card}`}>
          <h3>{intervention.title}</h3>
          <p>{intervention.text}</p>
        </li>
      ))}
    </ul>
  );
};
