import React from "react";
import styles from "./Antennes.module.scss";
import { CategoryName } from "./CategoryName";
import { Title } from "./Title";
import { Text } from "./Text";
import { Buttons } from "./Buttons";

export const Antennes = () => {
  return (
    <section className={styles.antennes}>
      <CategoryName />
      <Title />
      <Text />
      <Buttons />
    </section>
  );
};
