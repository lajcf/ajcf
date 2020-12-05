import React from "react";
import { useRouter } from "next/router";
import { QuickAccess } from "./QuickAccess";

export type Page = "a-propos";

export type SubPage = "qui-sommes-nous" | "partenaires" | "presse";

const parsePathname = (pathname: string) => {
  const dividedPathname = pathname.split("/");
  const page = dividedPathname[1] as Page | undefined;
  const subPage = dividedPathname[2] as SubPage | undefined;
  return {
    page,
    subPage,
  };
};

export const QuickAccessContainer = () => {
  const { pathname } = useRouter();
  const { page, subPage } = parsePathname(pathname);
  return <QuickAccess page={page} subPage={subPage} />;
};
