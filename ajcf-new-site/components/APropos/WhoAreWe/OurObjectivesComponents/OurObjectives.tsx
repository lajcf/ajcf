import React from "react";
import { CategoryName } from "./CategoryName";
import { Checklist } from "./Checklist";
import styles from "./OurObjectives.module.scss";

export const OurObjectives = () => {
  return (
    <section className={styles.ourObjectives}>
      <CategoryName />
      <Checklist />
    </section>
  );
};
