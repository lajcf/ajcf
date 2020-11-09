import React from "react";
import "./Header.css";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <SearchBar />
      <Navigation />
      <UserButtons />
    </div>
  );
};
