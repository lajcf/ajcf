import React from "react";
import styles from "./Education.module.scss";
import { CategoryName } from "./CategoryName";
import { Title } from "./Title";
import { Text } from "./Text";
import { Cards } from "./Cards";
import { LearnMore } from "./LearnMore";

export const Education = () => {
  return (
    <section className={styles.interventions}>
      <CategoryName />
      <Title />
      <Text />
      <Cards />
      <LearnMore />
    </section>
  );
};
