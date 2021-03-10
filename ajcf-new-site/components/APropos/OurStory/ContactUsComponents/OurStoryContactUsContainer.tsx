import Link from "next/link";
import React from "react";
import styles from "../OurStory.module.scss";

const pleaContent = `Intéréssé(e) pour nous rejoindre ? Vous aussi, vous voulez contribuer à nos projets ?`;

export const OurStoryContactUsContainer = () => {
  return (
    <section className={styles.contactUsSection}>
      <h2>{pleaContent}</h2>
      <Link href="/contact">
        <button type="button">Contactez-nous !</button>
      </Link>
    </section>
  );
};
