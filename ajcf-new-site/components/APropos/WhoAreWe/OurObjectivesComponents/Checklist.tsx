import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./OurObjectives.module.scss";

const checklist = [
  `Procurer un espace d'échange et d'expression pour les jeunes citoyens français d'origine chinoise;`,
  `Consolider leur identité franco-chinoise en favorisant leur épanouissement personnel et professionnel;`,
  `Améliorer la visibilité de cette nouvelle génération au sein de la société multiculturelle française;`,
  `Permettre à la société française d'approfondir sa connaissance de la culture chinoise et de ses représentants en France;`,
  `Lutter contre le racisme anti-asiatique et venir en aide aux victimes.`,
];

export const Checklist = () => {
  return (
    <div className={styles.checklist}>
      {checklist.map((checkItem, index) => (
        <div key={index} className={styles.checkItem}>
          <CheckCircleOutlined className={styles.checkIcon} />
          <p className={styles.checkText}>{checkItem}</p>
        </div>
      ))}
    </div>
  );
};
