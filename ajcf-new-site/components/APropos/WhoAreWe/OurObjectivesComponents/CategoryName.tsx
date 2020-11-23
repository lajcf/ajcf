import React from "react";
import styles from "./OurObjectives.module.scss";

const categoryNameContent = `Nos objectifs`;
export const CategoryName = () => {
  return <h1 className={styles.categoryName}>{categoryNameContent}</h1>;
};
