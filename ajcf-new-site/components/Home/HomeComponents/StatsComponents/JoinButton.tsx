import React from "react";
import { Button } from "antd";
import styles from "./Stats.module.scss";

export const JoinButton = () => {
  return (
    <div className={styles.joinButton}>
      <Button>Nous rejoindre</Button>
    </div>
  );
};
