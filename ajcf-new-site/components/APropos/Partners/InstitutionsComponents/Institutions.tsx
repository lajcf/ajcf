import React from "react";
import styles from "./Institutions.module.scss";

const logos: string[] = [];
for (let index = 0; index < 18; index++) {
  logos.push("LOGO");
}

export const Institutions = () => {
  return (
    <section className={styles.institutions}>
      <h2>Institutions</h2>
      <div className={styles.logos}>
        {logos.map((logo) => (
          <div className={styles.logo}>{logo}</div>
        ))}
      </div>
    </section>
  );
};
