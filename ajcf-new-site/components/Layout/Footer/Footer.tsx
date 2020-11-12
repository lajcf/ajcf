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
      <Logo />
      <DonationPlea />
      <hr className={`${styles.separator} ${styles.separator01}`} />
      <NewsletterPlea />
      <InternalLinks />
      <SocialMediaLinks />
      <hr className={`${styles.separator} ${styles.separator02}`} />
      <CopyrightAJCF />
      <LegalLinks />
    </footer>
  );
};
