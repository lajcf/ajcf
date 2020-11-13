import React from "react";
import styles from "./Banner.module.scss";

const titleContent: string = "L'AJCF, explorer sa culture franco-chinoise ensemble";

export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
