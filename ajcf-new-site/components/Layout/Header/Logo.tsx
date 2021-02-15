import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img className={styles.logoImg} src={require("../../../public/ajcf-logo.png")} />
        </a>
      </Link>
    </div>
  );
};
