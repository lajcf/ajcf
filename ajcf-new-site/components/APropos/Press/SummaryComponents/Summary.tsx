import React from "react";
import styles from "./Summary.module.scss";
import Link from "next/link";

export const Summary = () => {
  return (
    <section className={styles.summary}>
      <h1>Presse</h1>
      <div className={styles.inPageLinks}>
        <Link href="#revue-de-presse">Revue de presse</Link>
        <Link href="#communiques">Communiqués</Link>
      </div>
    </section>
  );
};
