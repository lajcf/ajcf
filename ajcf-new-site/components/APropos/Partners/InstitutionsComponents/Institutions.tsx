import React from "react";
import styles from "./Institutions.module.scss";

const logos: string[] = new Array(18);
logos.fill("LOGO");

export const Institutions = () => {
  return (
    <section className={styles.institutions}>
      <h2 id="institutions">Institutions</h2>
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
