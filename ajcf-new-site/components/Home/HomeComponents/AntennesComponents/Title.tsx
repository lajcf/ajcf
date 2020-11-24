import React from "react";
import styles from "./Antennes.module.scss";

const titleContent = `Créer des espaces de discussions partout en France`;

export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
