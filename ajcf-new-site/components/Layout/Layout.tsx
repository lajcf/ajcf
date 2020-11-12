import React, { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
