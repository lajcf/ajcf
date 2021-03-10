import React from "react";
import styles from "../OurStory.module.scss";

const pleaContent = `Intéréssé(e) pour nous rejoindre ? Vous aussi,\nvous voulez contribuer à nos projets ?`;

export const OurStoryContactUsContainer = () => {
  return (
    <section className={styles.contactUsSection}>
      <h3>{pleaContent}</h3>
      <button type="button">Contactez-nous !</button>
    </section>
  );
};
