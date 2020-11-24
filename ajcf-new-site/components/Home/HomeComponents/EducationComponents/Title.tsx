import React from "react";
import styles from "./Education.module.scss";

const titleContent = `Sensibiliser aux discriminations et racisme anti-asiatique`;

export const Title = () => {
  return <h1 className={styles.title}>{titleContent}</h1>;
};
