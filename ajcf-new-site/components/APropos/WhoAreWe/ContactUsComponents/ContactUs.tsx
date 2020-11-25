import React from "react";
import styles from "./ContactUs.module.scss";
import { ContactUsButton } from "./ContactUsButton";

const pleaContent = `Intéréssé(e) pour nous rejoindre ? Vous aussi,\nvous voulez contribuer à nos projets ?`;

export const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <h2>
        <pre className={styles.pleaContent}>{pleaContent}</pre>
      </h2>
      <ContactUsButton />
    </section>
  );
};
