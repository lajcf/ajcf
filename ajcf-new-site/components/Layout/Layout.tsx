import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
