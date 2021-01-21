import React, { ReactNode } from "react";
import Link from "next/link";
import { Menu } from "antd";
import styles from "./QuickAccess.module.scss";
import { Page, SubPage } from "./QuickAccessContainer";

export type QuickAccessProps = {
  page?: Page;
  subPage?: SubPage;
};

export const QuickAccess = ({ page, subPage }: QuickAccessProps) => {
  switch (page) {
    case "a-propos":
      return (
        <QuickAccessLayout defaultSelectedKeys={subPage && [subPage]}>
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
  defaultSelectedKeys?: SubPage[];
}) => {
  return (
    <aside className={styles.quickAccess}>
      <h2>ACCES RAPIDE</h2>
      <Menu defaultSelectedKeys={defaultSelectedKeys}>{children}</Menu>
    </aside>
  );
};
