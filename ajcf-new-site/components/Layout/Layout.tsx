import React, { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

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
