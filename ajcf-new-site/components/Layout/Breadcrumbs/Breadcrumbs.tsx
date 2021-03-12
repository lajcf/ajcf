import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = {
  breadcrumbsPathArray: string[];
};
const pageLink = (index: number, breadcrumbsPathArray: string[]) => {
  const pageSlug = breadcrumbsPathArray.slice(0, index + 1);
  return `/${pageSlug.join("/")}`;
};
export const Breadcrumbs = ({ breadcrumbsPathArray }: BreadcrumbsProps) => {
  return (
    <aside className={styles.breadcrumbs}>
      <Breadcrumb>
        <Breadcrumb.Item key="accueil">
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </Breadcrumb.Item>
        {breadcrumbsPathArray.map((page, index) => (
          <Breadcrumb.Item key={page}>
            <Link href={pageLink(index, breadcrumbsPathArray)}>
              <a>{page}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </aside>
  );
};
