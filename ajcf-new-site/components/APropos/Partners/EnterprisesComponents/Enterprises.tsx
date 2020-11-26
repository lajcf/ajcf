import React from "react";
import styles from "./Enterprises.module.scss";

const logos: string[] = new Array(6);
logos.fill("LOGO");

export const Enterprises = () => {
  return (
    <section className={styles.enterprises}>
      <h2 id="entreprises">Entreprises</h2>
      <div className={styles.logos}>
        {logos.map((logo, key) => (
          <div key={key} className={styles.logo}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};
