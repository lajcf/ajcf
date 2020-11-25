import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

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
