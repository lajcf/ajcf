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
      <div className={`capsHeading ${styles.quickAccessHeader}`}>Accès rapide</div>
      <Menu defaultSelectedKeys={defaultSelectedKeys}>{children}</Menu>
    </aside>
  );
};
