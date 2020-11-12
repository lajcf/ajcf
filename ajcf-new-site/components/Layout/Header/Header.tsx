import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <Nav />
      <UserButtons />
    </header>
  );
};
