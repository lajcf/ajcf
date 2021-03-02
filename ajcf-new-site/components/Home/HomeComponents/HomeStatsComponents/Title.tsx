import React from "react";
import styles from "./Stats.module.scss";

const titleContent = `L'AJCF en quelques chiffres`;
export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
