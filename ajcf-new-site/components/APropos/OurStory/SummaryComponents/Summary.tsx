import React from "react";
import styles from "./Summary.module.scss";
import { Text } from "./Text";
import { Images } from "./Images";

export const Summary = () => {
  return (
    <section className={styles.summary}>
      <Text />
      <Images />
    </section>
  );
};
