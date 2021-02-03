import React, { ReactNode } from "react";
import { Menu } from "antd";
import { SubPage } from "./QuickAccessContainer";
import styles from "./QuickAccess.module.scss";

export const QuickAccessLayout = ({
  children,
  defaultSelectedKeys,
}: {
  children: ReactNode;
  defaultSelectedKeys?: SubPage[];
}) => {
  return (
    <aside className={styles.quickAccess}>
      <h3>ACCES RAPIDE</h3>
      <Menu defaultSelectedKeys={defaultSelectedKeys}>{children}</Menu>
    </aside>
  );
};
