import React from "react";
import { Button } from "antd";
import styles from "./Education.module.scss";

const buttonContent = `En savoir plus`;

export const LearnMore = () => {
  return (
    <div className={styles.button}>
      <Button type="primary">{buttonContent}</Button>
    </div>
  );
};
