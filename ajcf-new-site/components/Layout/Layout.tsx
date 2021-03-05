import React, { ReactNode } from "react";
import { BreadcrumbsContainer } from "./Breadcrumbs/BreadcrumbsContainer";
import { FooterContainer } from "./FooterComponents/FooterContainer";
import { Header } from "./Header/Header";
import { BannerContainer } from "./Banner/BannerContainer";
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
      <BannerContainer />
      <main>
        <BreadcrumbsContainer />
        <QuickAccessContainer />
        {children}
      </main>
      <FooterContainer />
    </div>
  );
};
