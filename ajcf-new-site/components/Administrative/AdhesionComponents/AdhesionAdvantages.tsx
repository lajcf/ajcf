import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./Adhesion.module.scss";

const advantagesBulletPoints = [
  {
    id: 1,
    content: "Et has minim elitr intellegat. Mea aeterno eleifend no suscipit quaerendum. At nam minimum ponderum. ",
  },
  {
    id: 2,
    content: "Et has minim elitr intellegat. Mea aeterno eleifend no suscipit quaerendum. At nam minimum ponderum.",
  },
  {
    id: 3,
    content: "Et has minim elitr intellegat. Mea aeterno eleifend no suscipit quaerendum. At nam minimum ponderum.",
  },
  {
    id: 4,
    content: "Et has minim elitr intellegat. Mea aeterno eleifend no suscipit quaerendum. At nam minimum ponderum. ",
  },
];

export const AdhesionAdvantages = () => {
  return (
    <section className={styles.adhesionAdvantagesSection}>
      <h1>Les avantages adhérents</h1>
      <ul className={styles.bulletPointsList}>
        {advantagesBulletPoints.map((advantageBulletPoint) => (
          <li key={advantageBulletPoint.id} className={styles.bulletPoint}>
            <CheckCircleOutlined className={styles.checkIcon} />
            <p className="texte1">{advantageBulletPoint.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
