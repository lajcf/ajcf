import React from "react";
import styles from "./AssociationsAndCollectives.module.scss";

const logos: string[] = [];
for (let index = 0; index < 12; index++) {
  logos.push("LOGO");
}

export const AssociationsAndCollectives = () => {
  return (
    <section className={styles.associationsAndCollectives}>
      <h2 id="associations-et-collectifs">Associations et collectifs</h2>
      <div className={styles.logos}>
        {logos.map((logo) => (
          <div className={styles.logo}>{logo}</div>
        ))}
      </div>
    </section>
  );
};
