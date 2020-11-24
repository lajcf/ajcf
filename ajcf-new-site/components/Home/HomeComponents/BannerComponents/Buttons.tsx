import React from "react";
import { Button } from "antd";
import styles from "./Banner.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button className={styles.histoire}>Notre Histoire</Button>
      <Button type="primary" className={styles.projets}>
        Nos projets
      </Button>
    </div>
  );
};
