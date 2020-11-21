import React from "react";
import styles from "../Footer.module.scss";

const termContent = "Mentions légales";
const privacyContent = "Politique de confidentialité";

export const LegalLinks = () => {
  return (
    <div className={styles.legalLinks}>
      <div className={styles.term}>{termContent}</div>
      <div>{privacyContent}</div>
    </div>
  );
};
