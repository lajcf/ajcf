import React from "react";
import styles from "./Partners.module.scss";

const partners = [
  {
    className: `${styles.partner1}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner2}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner3}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner4}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner5}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner6}`,
    logo: `LOGO`,
  },
  {
    className: `${styles.partner7}`,
    logo: `LOGO`,
  },
];
export const PartnersLogos = () => {
  return (
    <ul className={styles.partnersLogos}>
      {partners.map((partner) => (
        <li key={partner.className} className={partner.className}>
          {partner.logo}
        </li>
      ))}
    </ul>
  );
};
