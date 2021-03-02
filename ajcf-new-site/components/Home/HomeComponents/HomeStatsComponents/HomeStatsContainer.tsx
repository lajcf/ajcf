import React from "react";
import styles from "./Stats.module.scss";
import { Title } from "./Title";
import { NumbersList } from "./NumbersList";
import { JoinButton } from "./JoinButton";

export const HomeStatsContainer = () => {
  return (
    <section className={styles.stats}>
      <Title />
      <NumbersList />
      <JoinButton />
    </section>
  );
};
