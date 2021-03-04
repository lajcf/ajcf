import Link from "next/link";
import React from "react";
import styles from "./HomeEspaces.module.scss";
import { EspaceContent } from "./HomeEspacesDescriptions";

export const HomeEspaceDescription = ({ espace }: { espace: EspaceContent }) => {
  const Logo = espace.logo;

  return (
    <div key={espace.name} className={styles.espaceDescription}>
      <Logo className={styles.logoStyle} />
      <h3>{espace.name}</h3>
      <p>{espace.text}</p>
      <Link href={espace.link}>
        <a className={`link ${styles.link}`}>{espace.linkText}</a>
      </Link>
    </div>
  );
};
