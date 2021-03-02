import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/a-propos/qui-sommes-nous">
            <a>À propos de nous</a>
          </Link>
        </li>
        <li>
          <Link href="/projets-ajcf">
            <a>Projets AJCF</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/agenda">
            <a>Agenda</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
