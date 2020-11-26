import React from "react";
import styles from "./Enterprises.module.scss";

const logos: string[] = [];
for (let index = 0; index < 6; index++) {
  logos.push("LOGO");
}

export const Enterprises = () => {
  return (
    <section className={styles.enterprises}>
      <h2 id="entreprises">Entreprises</h2>
      <div className={styles.logos}>
        {logos.map((logo) => (
          <div className={styles.logo}>{logo}</div>
        ))}
      </div>
    </section>
  );
};
