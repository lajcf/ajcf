import React from "react";
import styles from "./EducationAJCF.module.scss";

const interventionsContent = [
  {
    name: "Interventions scolaires",
    partnerName: "Ministère de l'Éducation",
  },
  {
    name: "Parcours de vie",
    partnerName: "SOS Racisme",
  },
  {
    name: "Cyberharcèlement",
    partnerName: "Respect Zone",
  },
  {
    name: "Nom du projet 01",
    partnerName: "Nom du partenaire",
  },
  {
    name: "Nom du projet 02",
    partnerName: "Nom du partenaire",
  },
];

export const OurInterventions = () => {
  return (
    <section className={styles.ourInterventionsSection}>
      <div>
        <h1>Nos interventions</h1>
        <p className="texte1">
          Découvrez nos interventions et nos partenaires sur la lutte contre le racisme et les discriminations.
        </p>
      </div>
      {interventionsContent.map((interventionContent) => (
        <div key={interventionContent.name} className={styles.interventionCard}>
          <h2>{interventionContent.name}</h2>
          <h3>{interventionContent.partnerName}</h3>
        </div>
      ))}
    </section>
  );
};
