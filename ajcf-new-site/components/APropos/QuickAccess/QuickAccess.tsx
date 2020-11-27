import React from "react";
import styles from "./QuickAccess.module.scss";
import Link from "next/link";
import { Menu } from "antd";

export type QuickAccessProps = {
  defaultSelectedKeys: string[];
};
export const QuickAccess = ({ defaultSelectedKeys }: QuickAccessProps) => {
  return (
    <aside className={styles.quickAccess}>
      <h2 className={styles.categoryName}>ACCES RAPIDE</h2>
      <Menu className={styles.menu} defaultSelectedKeys={defaultSelectedKeys}>
        <Menu.Item key="WhoAreWe">
          <Link href="/a-propos/qui-sommes-nous">Qui sommes-nous ?</Link>
        </Menu.Item>
        <Menu.Item key="Partners">
          <Link href="/a-propos/partenaires">Partenaires</Link>
        </Menu.Item>
        <Menu.Item key="Press">
          <Link href="/a-propos/presse">Presse</Link>
        </Menu.Item>
      </Menu>
    </aside>
  );
};
