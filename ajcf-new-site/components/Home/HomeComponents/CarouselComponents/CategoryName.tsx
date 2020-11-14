import React from "react";
import styles from "./Carousel.module.scss";

const categoryNameContent = "A la Une du Blog";

export const CategoryName = () => {
  return <h3 className={styles.categoryName}>{categoryNameContent}</h3>;
};
