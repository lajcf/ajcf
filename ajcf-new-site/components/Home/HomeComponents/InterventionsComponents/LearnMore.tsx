import React from "react";
import { Button } from "antd";
import styles from "./Interventions.module.scss";

const buttonContent = `En savoir plus`;

export const LearnMore = () => {
  return (
    <div className={styles.button}>
      <Button>{buttonContent}</Button>
    </div>
  );
};
