import React from "react";
import styles from "./Footer.module.scss";

const copyrightContent = "Copyright AJCF - 2020";

export const CopyrightAJCF = () => {
  return <div className={styles.copyrightAJCF}>{copyrightContent}</div>;
};
