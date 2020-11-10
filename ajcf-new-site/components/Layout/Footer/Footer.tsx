import React from "react";
import { Logo } from "./Logo";
import { DonationPlea } from "./DonationPlea";
import { HorizontalSeparator } from "./HorizontalSeparator";
import { NewsletterPlea } from "./NewsletterPlea";
import { InternalLinks } from "./InternalLinks";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { CopyrightAJCF } from "./CopyrightAJCF";
import { LegalLinks } from "./LegalLinks";

export const Footer = () => {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <DonationPlea className="footer__donation-plea" />
      <HorizontalSeparator className="footer__separator footer__separator-01" />
      <NewsletterPlea className="footer__newsletter-plea" />
      <InternalLinks className="footer__internal-links" />
      <SocialMediaLinks className="footer__social-media-links" />
      <HorizontalSeparator className="footer__separator footer__separator-02" />
      <CopyrightAJCF className="footer__copyright-ajcf" />
      <LegalLinks className="footer__legal-links" />
    </footer>
  );
};
