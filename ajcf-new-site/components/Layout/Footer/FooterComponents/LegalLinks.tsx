import React from "react";
import styles from "../Footer.module.scss";

const termContent = "Termes & Conditions";
const privacyContent = "Privacy Policy";

export const LegalLinks = () => {
  return (
    <div className={styles.legalLinks}>
      <div className={styles.term}>{termContent}</div>
      <div>{privacyContent}</div>
    </div>
  );
};
