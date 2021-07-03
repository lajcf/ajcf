import React from "react";
import styles from "./Footer.module.scss";
import { AJCFImage } from "../../../lib/utils/AJCFImage";
import logo from "../../../public/ajcf-logo.png";

export const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <AJCFImage src={logo} />
    </div>
  );
};
