import React from "react";
import styles from "./AssociationsAndCollectives.module.scss";

const logos: string[] = new Array(12);
logos.fill("LOGO");

export const AssociationsAndCollectives = () => {
  return (
    <section className={styles.associationsAndCollectives}>
      <h2 id="associations-et-collectifs">Associations et collectifs</h2>
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
