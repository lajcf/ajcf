import React from "react";
import { Button } from "antd";
import styles from "./Banner.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button>Notre Histoire</Button>
      <Button>Nos projets</Button>
    </div>
  );
};
