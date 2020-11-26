import React from "react";
import styles from "./Summary.module.scss";
import Link from "next/link";

export const InPageLinks = () => {
  return (
    <div className={styles.inPageLinks}>
      <Link href="#institutions">Institutions</Link>
      <Link href="#associations-et-collectifs">Associations et collectifs</Link>
      <Link href="#entreprises">Entreprises</Link>
    </div>
  );
};
