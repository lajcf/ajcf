import React from "react";
import styles from "./Bureau.module.scss";
import { BureauMembers } from "./BureauMembers";

export const Bureau = () => {
  return (
    <section className={styles.bureau}>
      <h2 className={styles.categoryName}>Notre Bureau</h2>
      <BureauMembers />
    </section>
  );
};
