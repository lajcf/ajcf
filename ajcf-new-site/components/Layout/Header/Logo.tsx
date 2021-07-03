import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import { AJCFImage } from "../../../lib/utils/AJCFImage";
import logo from "../../../public/ajcf-logo.png";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <AJCFImage className={styles.logoImg} src={logo} />
        </a>
      </Link>
    </div>
  );
};
