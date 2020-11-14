import React from "react";
import styles from "./Carousel.module.scss";
import { Image } from "./Image";
import { CategoryName } from "./CategoryName";
import { Title } from "./Title";
import { Text } from "./Text";
import { ReadButton } from "./readButton";

export const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Image />
      <CategoryName />
      <Title />
      <Text />
      <ReadButton />
    </div>
  );
};
