import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "./FooterComponents/Logo";
import { DonationPlea } from "./FooterComponents/DonationPlea";
import { NewsletterPlea } from "./FooterComponents/NewsletterPlea";
import { InternalLinks } from "./FooterComponents/InternalLinks";
import { SocialMediaLinks } from "./FooterComponents/SocialMediaLinks";
import { CopyrightAJCF } from "./FooterComponents/CopyrightAJCF";
import { LegalLinks } from "./FooterComponents/LegalLinks";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.firstRow}>
        <Logo />
        <DonationPlea />
      </section>
      <hr className="separator" />
      <section className={styles.secondRow}>
        <NewsletterPlea />
        <InternalLinks />
        <SocialMediaLinks />
      </section>
      <hr className="separator" />
      <section className={styles.thirdRow}>
        <CopyrightAJCF />
        <LegalLinks />
      </section>
    </footer>
  );
};
