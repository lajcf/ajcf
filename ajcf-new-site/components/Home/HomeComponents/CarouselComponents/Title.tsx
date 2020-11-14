import React from "react";
import styles from "./Carousel.module.scss";

const titleContent = `Être "Jeune Chinois de France", quel sens aujourd'hui?`;
export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
