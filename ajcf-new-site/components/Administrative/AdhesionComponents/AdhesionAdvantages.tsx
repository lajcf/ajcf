import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./Adhesion.module.scss";

const advantagesBulletPoints = [
  "bénéficier de tarifs préférentiels pour certaines de nos activités et des établissements tels que des Musées d’Orsay et de l’Orangerie (Carte Blanche)",
  "recevoir les informations concernant nos activités en avant-première.",
  "voter à l'Assemblée Générale de l’AJCF",
  "proposer des idées pour le bien de la communauté. Si celles-ci sont retenues, il sera possible de concrétiser ces idées avec le soutien de l’association.",
  "devenir un membre adhérent actif et contribuer directement à la vie de l'association.",
];

export const AdhesionAdvantages = () => {
  return (
    <section className={styles.adhesionAdvantagesSection}>
      <h1>Les avantages adhérents</h1>
      <p>De plus, l'adhésion à l’AJCF offre les avantages suivants, pour une durée d'un an renouvelable:</p>
      <ul>
        {advantagesBulletPoints.map((advantageBulletPoint) => (
          <li key={advantageBulletPoint}>
            <CheckCircleOutlined className={styles.checkIcon} />
            <p>{advantageBulletPoint}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
