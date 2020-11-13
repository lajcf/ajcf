import React from "react";
import styles from "./Espaces.module.scss";
import { Title } from "./Title";
import { Text } from "./Text";
import { EspacesDescriptions } from "./EspacesDescriptions";

export const Espaces = () => {
  return (
    <section className={styles.espaces}>
      <Title />
      <Text />
      <EspacesDescriptions />
    </section>
  );
};
