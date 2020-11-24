import React from "react";
import styles from "./Banner.module.scss";

const titleContent = "L'AJCF, explorer sa culture franco-chinoise ensemble";

export const Title = () => {
  return <h1 className={styles.title}>{titleContent}</h1>;
};
