import React from "react";
import styles from "./Banner.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button>Notre Histoire</button>
      <button>Nos projets</button>
    </div>
  );
};
