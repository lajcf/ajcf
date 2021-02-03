import React from "react";
import styles from "./Donate.module.scss";

export const DonationIncentives = () => {
  return (
    <section className={styles.donationIncentivesSection}>
      <h1>Des versements déduits de vos impôts</h1>
      <ul>
        <li>
          <div className={styles.bigFigure}>66%</div>
          <p className="texte1">
            de réduction d'impôt sur le total des versements, dans la limite de 20 % du revenu imposable de votre foyer.{" "}
          </p>
        </li>
        <li>
          <div className={styles.bigFigure}>17 €</div>
          <p className="texte1">de coût réel pour un don de 50€.</p>
        </li>
        <li>
          <div className={styles.bigFigure}>1 reçu fiscal</div>
          <p className="texte1">que l’on vous envoie systématiquement par mail après chaque don.</p>
        </li>
      </ul>
    </section>
  );
};
