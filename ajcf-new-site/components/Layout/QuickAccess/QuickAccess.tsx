import React, { ReactNode } from "react";
import styles from "./QuickAccess.module.scss";
import Link from "next/link";
import { Menu } from "antd";
import { Page, SubPage } from "./QuickAccessContainer";

export type Pathname = {
  page: Page;
  subPage: SubPage;
};

export const QuickAccess = ({ page, subPage }: Pathname) => {
  switch (page) {
    case "a-propos":
      return (
        <QuickAccessLayout defaultSelectedKeys={typeof subPage === "string" ? [subPage] : [""]}>
          <Menu.Item key="qui-sommes-nous">
            <Link href="./qui-sommes-nous">Qui sommes-nous ?</Link>
          </Menu.Item>
          <Menu.Item key="partenaires">
            <Link href="./partenaires">Partenaires</Link>
          </Menu.Item>
          <Menu.Item key="presse">
            <Link href="./presse">Presse</Link>
          </Menu.Item>
        </QuickAccessLayout>
      );
    default:
      return null;
  }
};

const QuickAccessLayout = ({
  children,
  defaultSelectedKeys,
}: {
  children: ReactNode;
  defaultSelectedKeys: string[] | undefined;
}) => {
  return (
    <aside className={styles.quickAccess}>
      <h2 className={styles.categoryName}>ACCES RAPIDE</h2>
      <Menu className={styles.menu} defaultSelectedKeys={defaultSelectedKeys}>
        {children}
      </Menu>
    </aside>
  );
};
