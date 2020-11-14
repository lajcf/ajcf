import React from "react";
import styles from "./Partners.module.scss";

const titleContent = `Nos partenaires`;
export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
