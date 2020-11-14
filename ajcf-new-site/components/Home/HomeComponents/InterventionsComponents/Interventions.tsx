import React from "react";
import styles from "./Interventions.module.scss";
import { Title } from "./Title";
import { Text } from "./Text";
import { Cards } from "./Cards";
import { Button } from "./Button";

export const Interventions = () => {
  return (
    <section className={styles.interventions}>
      <Title />
      <Text />
      <Cards />
      <Button />
    </section>
  );
};
