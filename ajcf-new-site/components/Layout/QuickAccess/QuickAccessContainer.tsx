import React from "react";
import { useRouter } from "next/router";
import { QuickAccess } from "./QuickAccess";

export type Page = "a-propos" | undefined;

export type SubPage = "qui-sommes-nous" | "partenaires" | "presse" | undefined;

const parsePathname = () => {
  const { pathname } = useRouter();
  const dividedPathname = pathname.split("/");
  const page = dividedPathname[1] as Page;
  const subPage = dividedPathname[2] as SubPage;
  console.log(page);
  console.log(subPage);
  return {
    page: page,
    subPage: subPage,
  };
};

export const QuickAccessContainer = () => {
  const { page, subPage } = parsePathname();
  return <QuickAccess page={page} subPage={subPage} />;
};
