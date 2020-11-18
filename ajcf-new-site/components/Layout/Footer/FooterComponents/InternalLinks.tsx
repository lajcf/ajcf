import React from "react";
import styles from "../Footer.module.scss";

export const InternalLinks = () => {
  return (
    <div className={styles.internalLinks}>
      <ul className={styles.projetsAJCF}>
        <li>
          <h3>Projets AJCF</h3>
        </li>
        <li>
          <small>Espaces</small>
        </li>
        <li>
          <small>Interventions</small>
        </li>
        <li>
          <small>Collaborations</small>
        </li>
      </ul>
      <ul className={styles.aide}>
        <li>
          <h3>Aide</h3>
        </li>
        <li>
          <small>FAQs</small>
        </li>
        <li>
          <small>Contactez-nous</small>
        </li>
      </ul>
    </div>
  );
};
