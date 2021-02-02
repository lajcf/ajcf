import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import { Page, SubPage } from "./QuickAccessContainer";
import { QuickAccessLayout } from "./QuickAccessLayout";

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
    case "projets-ajcf":
      return (
        <QuickAccessLayout defaultSelectedKeys={subPage && [subPage]}>
          <Menu.Item key="nos-espaces">
            <Link href="/projets-ajcf/nos-espaces">Nos espaces</Link>
          </Menu.Item>
          <Menu.Item key="nos-antennes">
            <Link href="/projets-ajcf/nos-antennes">Nos antennes</Link>
          </Menu.Item>
          <Menu.Item key="education-ajcf">
            <Link href="/projets-ajcf/education-ajcf">Education AJCF</Link>
          </Menu.Item>
          <Menu.Item key="recrutement">
            <Link href="/projets-ajcf/recrutement">Recrutement</Link>
          </Menu.Item>
        </QuickAccessLayout>
      );
    case "adherer":
    case "faire-un-don":
    case "contact":
      return (
        <QuickAccessLayout defaultSelectedKeys={[page]}>
          <Menu.Item key="adherer">
            <Link href="/adherer">Adhérer</Link>
          </Menu.Item>
          <Menu.Item key="faire-un-don">
            <Link href="/faire-un-don">Faire un don</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="/contact">Contact</Link>
          </Menu.Item>
        </QuickAccessLayout>
      );
    default:
      return null;
  }
};
