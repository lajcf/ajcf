import React from "react";
import { Button } from "antd";
import styles from "./Antennes.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button className={styles.learnMore}>En savoir plus sur l'Antenne Lyon</Button>
      <Button type="primary" className={styles.contactUs}>
        Nous contacter
      </Button>
    </div>
  );
};
