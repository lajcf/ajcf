import React from "react";
import styles from "./Antennes.module.scss";

const categoryNameContent = "Les antennes AJCF";

export const CategoryName = () => {
  return <h3 className={styles.categoryName}>{categoryNameContent.toUpperCase()}</h3>;
};
