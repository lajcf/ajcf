import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./OurObjectives.module.scss";

const checklist = [
  {
    id: 1,
    content: `L’antenne de Lyon a pour objectif de développer les activités de l’AJCF dans la région lyonnaise, d’y recruter de nouveaux membres, et d’adapter les actions selon les besoins locaux. Nous aimerions également nous faire connaître auprès des jeunes Chinois de Lyon et des acteurs lyonnais, mais aussi de toutes personnes intéressées.`,
  },
  {
    id: 2,
    content: `Consolider leur identité franco-chinoise en favorisant leur épanouissement personnel et professionnel;`,
  },
  {
    id: 3,
    content: `Améliorer la visibilité de cette nouvelle génération au sein de la société multiculturelle française;`,
  },
  {
    id: 4,
    content: `Permettre à la société française d'approfondir sa connaissance de la culture chinoise et de ses représentants en France;`,
  },
  {
    id: 5,
    content: `Lutter contre le racisme anti-asiatique et venir en aide aux victimes.`,
  },
];

export const Checklist = () => {
  return (
    <div className={styles.checklist}>
      {checklist.map((checkItem) => (
        <div key={checkItem.id} className={styles.checkItem}>
          <CheckCircleOutlined className={styles.checkIcon} />
          <p className={styles.checkText}>{checkItem.content}</p>
        </div>
      ))}
    </div>
  );
};
