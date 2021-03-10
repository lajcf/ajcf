import React from "react";
import styles from "./HomeStats.module.scss";
import { HomeStatsList } from "./HomeStatsList";

export const HomeStatsContainer = () => {
  return (
    <section className={styles.statsSection}>
      <h2>L'AJCF en quelques chiffres</h2>
      <HomeStatsList />
      <button type="button">Nous rejoindre</button>
    </section>
  );
};
