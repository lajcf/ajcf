import React from "react";
import styles from "../Header/Header.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>À propos de nous</li>
        <li>Projets AJCF</li>
        <li>Actualité</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
