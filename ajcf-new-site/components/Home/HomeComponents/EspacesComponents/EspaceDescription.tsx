import Link from "next/link";
import React from "react";
import styles from "./Espaces.module.scss";
import { EspaceContent } from "./EspacesDescriptions";

export const EspaceDescription = ({ espace }: { espace: EspaceContent }) => {
  const Logo = espace.logo;

  return (
    <div key={espace.name} className={styles.espaceDescription}>
      <Logo className={styles.logoStyle} />
      <h3>{espace.name}</h3>
      <p>{espace.text}</p>
      <Link href={espace.link}>
        <a className={styles.link}>{espace.linkText}</a>
      </Link>
    </div>
  );
};
