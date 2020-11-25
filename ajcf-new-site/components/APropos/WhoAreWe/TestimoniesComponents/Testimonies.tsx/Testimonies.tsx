import React from "react";
import { Carousel } from "./Carousel";
import { CategoryName } from "./CategoryName";
import styles from "./Testimonies.module.scss";

export const Testimonies = () => {
  return (
    <section className={styles.testimonies}>
      <CategoryName />
      <Carousel />
    </section>
  );
};
