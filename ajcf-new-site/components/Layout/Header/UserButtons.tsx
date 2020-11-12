import React from "react";
import styles from "../Header/Header.module.scss";
import { DonateButton } from "./DonateButton";
import { SubscribeButton } from "./SubscribeButton";

export const UserButtons = () => {
  return (
    <div className={styles.userButtons}>
      <DonateButton />
      <SubscribeButton />
    </div>
  );
};
