import React from "react";
import styles from "./Banner.module.scss";
import { Image } from "./Image";
import { Title } from "./Title";
import { Text } from "./Text";
import { Buttons } from "./Buttons";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <Image />
      <Title />
      <Text />
      <Buttons />
    </section>
  );
};
