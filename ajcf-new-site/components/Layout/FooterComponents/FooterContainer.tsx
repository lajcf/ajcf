import React from "react";
import styles from "./Footer.module.scss";
import { FooterLogo } from "./FooterLogo";
import { FooterDonationPlea } from "./FooterDonationPlea";
import { NewsletterPlea } from "./NewsletterPlea";
import { InternalLinks } from "./InternalLinks";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { CopyrightAJCF } from "./CopyrightAJCF";
import { LegalLinks } from "./LegalLinks";

export const FooterContainer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.firstRow}>
        <FooterLogo />
        <FooterDonationPlea />
      </section>
      <div className="separator" />
      <section className={styles.secondRow}>
        <NewsletterPlea />
        <InternalLinks />
        <SocialMediaLinks />
      </section>
      <div className="separator" />
      <section className={styles.thirdRow}>
        <CopyrightAJCF />
        <LegalLinks />
      </section>
    </footer>
  );
};
