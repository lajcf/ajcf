import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "../OurStory.module.scss";

const checklist = [
  {
    id: 1,
    content: `Procurer un espace d’échange et d’expression pour les jeunes citoyens français d’origine chinoise ;`,
  },
  {
    id: 2,
    content: `Consolider leur identité franco-chinoise en favorisant leur épanouissement personnel et professionnel ;`,
  },
  {
    id: 3,
    content: `Améliorer la visibilité de cette nouvelle génération au sein de la société multiculturelle française ;`,
  },
  {
    id: 4,
    content: `Permettre à la société française d'approfondir sa connaissance de la culture chinoise et de ses représentants en France ;`,
  },
  {
    id: 5,
    content: `Lutter contre le racisme anti-asiatique et venir en aide aux victimes.`,
  },
];

const Checklist = () => {
  return (
    <ul>
      {checklist.map((checkItem) => (
        <li key={checkItem.id}>
          <CheckCircleOutlined className={styles.checkIcon} />
          <p>{checkItem.content}</p>
        </li>
      ))}
    </ul>
  );
};

export const OurObjectivesContainer = () => {
  return (
    <section className={styles.ourObjectivesSection}>
      <h2>Nos objectifs</h2>
      <Checklist />
    </section>
  );
};
