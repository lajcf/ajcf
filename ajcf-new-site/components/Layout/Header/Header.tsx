import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />
      <SearchBar className={styles.header__searchbar} />
      <Navigation className={styles.header__nav} />
      <UserButtons className={styles.header__userbuttons} />
    </header>
  );
};
