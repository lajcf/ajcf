import React from "react";
import styles from "./Espaces.module.scss";

const titleContent: string = "S'exprimer à travers nos 4 espaces";

export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
