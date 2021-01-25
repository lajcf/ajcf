import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { QuickAccessContainer } from "./QuickAccess/QuickAccessContainer";

export type LayoutProps = {
  className?: string;
  children: ReactNode;
};

export const Layout = ({ className = undefined, children }: LayoutProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header />
      <main>
        <QuickAccessContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};
