import React from "react";
import styles from "./Interventions.module.scss";

const titleContent = `Interventions AJCF`;

export const Title = () => {
  return <h2 className={styles.title}>{titleContent.toUpperCase()}</h2>;
};
