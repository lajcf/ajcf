import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/a-propos/qui-sommes-nous">
          <a>À propos de nous</a>
        </Link>
        <Link href="/projets-ajcf">
          <a>Projets AJCF</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/agenda">
          <a>Agenda</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </nav>
  );
};
