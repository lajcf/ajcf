import React from "react";
import { Logo } from "./Logo";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderNavigationContainer } from "./HeaderNavigationContainer";
import { SearchBar } from "./SearchBar";

const headerNavigationContainerStyle: React.CSSProperties = {
  display: "flex",
};

export const Header = () => {
  return (
    <>
      <Logo />
      <HeaderNavigationContainer style={headerNavigationContainerStyle}>
        <SearchBar />
        <HeaderNavigation />
      </HeaderNavigationContainer>
    </>
  );
};
