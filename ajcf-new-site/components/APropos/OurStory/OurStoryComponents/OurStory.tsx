import React from "react";
import styles from "./OurStory.module.scss";
import { CategoryName } from "./CategoryName";
import { Title } from "./Title";
import { Text } from "./Text";
import { Image } from "./Image";

export const OurStory = () => {
  return (
    <section className={styles.ourStory}>
      <Image />
      <CategoryName />
      <Title />
      <Text />
    </section>
  );
};
