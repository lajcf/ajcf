import React from "react";
import styles from "./Interventions.module.scss";

const buttonContent = `En savoir plus`;

export const Button = () => {
  return (
    <div className={styles.button}>
      <button>{buttonContent}</button>
    </div>
  );
};
