import React, { ReactNode } from "react";
import { BreadcrumbsContainer } from "./Breadcrumbs/BreadcrumbsContainer";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import styles from "./Layout.module.scss";
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
        <BreadcrumbsContainer />
        <QuickAccessContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};
