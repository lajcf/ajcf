import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "./FooterComponents/Logo";
import { DonationPlea } from "./FooterComponents/DonationPlea";
import { HorizontalSeparator } from "./FooterComponents/HorizontalSeparator";
import { NewsletterPlea } from "./FooterComponents/NewsletterPlea";
import { InternalLinks } from "./FooterComponents/InternalLinks";
import { SocialMediaLinks } from "./FooterComponents/SocialMediaLinks";
import { CopyrightAJCF } from "./FooterComponents/CopyrightAJCF";
import { LegalLinks } from "./FooterComponents/LegalLinks";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <DonationPlea className={styles["footer__donation-plea"]} />
      <HorizontalSeparator className={`${styles.footer__separator} ${styles["footer__separator-01"]}`} />
      <NewsletterPlea className={`${styles["footer__newsletter-plea"]}`} />
      <InternalLinks className={styles["footer__internal-links"]} />
      <SocialMediaLinks className={styles["footer__social-media-links"]} />
      <HorizontalSeparator className={`${styles["footer__separator"]} ${styles["footer__separator-02"]}`} />
      <CopyrightAJCF className={styles["footer__copyright-ajcf"]} />
      <LegalLinks className={styles["footer__legal-links"]} />
    </footer>
  );
};
