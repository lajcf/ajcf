import React from "react";
import styles from "./OurStory.module.scss";
import { CategoryName } from "../../../APropos/WhoAreWe/OurStoryComponents/CategoryName";
import { Title } from "../../../APropos/WhoAreWe/OurStoryComponents/Title";
import { Text } from "../../../APropos/WhoAreWe/OurStoryComponents/Text";
import { Image } from "../../../APropos/WhoAreWe/OurStoryComponents/Image";

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
