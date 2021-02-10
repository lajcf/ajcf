import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = {
  pathArray: string[];
};
export const Breadcrumbs = ({ pathArray }: BreadcrumbsProps) => {
  const pageLink = (index: number) => {
    const pageSlug = pathArray.slice(1, index + 2);
    return `/${pageSlug.join("/")}`;
  };

  if (!pathArray[1]) {
    return null;
  }
  return (
    <section className={styles.breadcrumbs}>
      <Breadcrumb>
        <Breadcrumb.Item key="accueil">
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </Breadcrumb.Item>
        {pathArray.slice(1, -1).map((page, index) => (
          <Breadcrumb.Item key={page}>
            <Link href={pageLink(index)}>
              <a>{page}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </section>
  );
};
