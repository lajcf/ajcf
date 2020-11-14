import React from "react";
import styles from "./Header.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={require("../../../public/ajcf-logo.jpg")} />
    </div>
  );
};
