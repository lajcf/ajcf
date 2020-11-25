import React from "react";
import styles from "./Testimonies.module.scss";

const cateogoryNameContent = `Paroles de membres`;

export const CategoryName = () => {
  return <h1 className={styles.categoryName}>{cateogoryNameContent}</h1>;
};
