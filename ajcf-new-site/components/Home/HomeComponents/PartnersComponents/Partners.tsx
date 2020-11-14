import React from "react";
import styles from "./Partners.module.scss";
import { Title } from "./Title";
import { Text } from "./Text";
import { PartnersLogos } from "./PartnersLogos";

export const Partners = () => {
  return (
    <section className={styles.partners}>
      <Title />
      <Text />
      <PartnersLogos />
    </section>
  );
};
