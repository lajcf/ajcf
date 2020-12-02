import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { QuickAccessContainer } from "./QuickAccess/QuickAccessContainer";

export type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <QuickAccessContainer />
      {children}
      <Footer />
    </div>
  );
};
