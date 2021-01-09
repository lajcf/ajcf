import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img className={styles.logoImg} src={require("../../../public/ajcf-logo.jpg")} />
        </a>
      </Link>
    </div>
  );
};
