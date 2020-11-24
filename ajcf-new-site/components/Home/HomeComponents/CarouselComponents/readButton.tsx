import React from "react";
import { Button } from "antd";
import styles from "./Carousel.module.scss";

export const ReadButton = () => {
  return (
    <div className={styles.readButton}>
      <Button>Lire l'article</Button>
    </div>
  );
};
