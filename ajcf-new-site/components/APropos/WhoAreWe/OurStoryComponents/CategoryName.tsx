import React from "react";
import styles from "./OurStory.module.scss";

const categoryNameContent = `Notre Histoire`;

export const CategoryName = () => {
  return <h1 className={styles.categoryName}>{categoryNameContent.toUpperCase()}</h1>;
};
