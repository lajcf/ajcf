import React from "react";
import styles from "./OurStory.module.scss";

const titleContent = `L'affirmation d'une identité`;

export const Title = () => {
  return <h2 className={styles.title}>{titleContent}</h2>;
};
