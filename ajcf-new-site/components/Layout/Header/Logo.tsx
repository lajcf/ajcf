import React from "react";
import styles from "./Header.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a>
        <img className={styles.logoImg} src={require("../../../public/ajcf-logo.jpg")} />
      </a>
    </div>
  );
};
