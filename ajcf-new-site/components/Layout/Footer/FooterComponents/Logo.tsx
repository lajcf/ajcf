import React from "react";
import styles from "../Footer.module.scss";
// import { footer__logo } from "../Footer.module.scss";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className={styles.footer__logo}>
      <Image src="/img/ajcf-logo.jpg" alt="Logo" layout="fill" />
    </div>
  );
};
