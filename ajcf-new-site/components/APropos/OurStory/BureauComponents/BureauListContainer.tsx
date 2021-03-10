import React from "react";
import { BureauMembers } from "./BureauMembers";
import styles from "../OurStory.module.scss";

export const BureauListContainer = () => {
  return (
    <section className={styles.bureauListSection}>
      <h2>Notre Bureau</h2>
      <BureauMembers />
    </section>
  );
};
