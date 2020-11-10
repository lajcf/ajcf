import React from "react";
import "./Header.scss";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <SearchBar className="header__searchbar" />
      <Navigation className="header__nav" />
      <UserButtons className="header__user-buttons" />
    </header>
  );
};
