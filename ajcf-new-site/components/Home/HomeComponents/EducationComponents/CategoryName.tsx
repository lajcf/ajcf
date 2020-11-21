import React from "react";
import styles from "./Education.module.scss";

const titleContent = `Education AJCF`;

export const CategoryName = () => {
  return <h2 className={styles.categoryName}>{titleContent.toUpperCase()}</h2>;
};
