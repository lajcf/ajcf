import React from "react";
import styles from "./Donate.module.scss";

const incentivesList = [
  {
    bigFigure: "66%",
    text:
      "de réduction d'impôt sur le total des versements, dans la limite de 20 % du revenu imposable de votre foyer.",
  },
  {
    bigFigure: "17 €",
    text: "de coût réel pour un don de 50€.",
  },
  {
    bigFigure: "1 reçu fiscal",
    text: "que l’on vous envoie systématiquement par mail après chaque don.",
  },
];

export const DonationIncentives = () => {
  return (
    <section className={styles.donationIncentivesSection}>
      <h1>Des versements déduits de vos impôts</h1>
      <ul>
        {incentivesList.map((incentive) => (
          <li key={incentive.text}>
            <div className={styles.bigFigure}>{incentive.bigFigure}</div>
            <p>{incentive.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
