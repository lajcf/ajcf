import React from "react";
import styles from "../Footer.module.scss";

export const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src={require("../../../../public/ajcf-logo.png")} />
    </figure>
  );
};
