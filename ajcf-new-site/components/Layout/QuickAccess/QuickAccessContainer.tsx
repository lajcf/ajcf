import React from "react";
import { useRouter } from "next/router";
import { QuickAccess } from "./QuickAccess";

export type Page = "a-propos";

export type SubPage = "qui-sommes-nous" | "partenaires" | "presse";

const parsePathname = () => {
  const { pathname } = useRouter();
  const dividedPathname = pathname.split("/");
  const page = dividedPathname.slice(-2, -1)[0] as Page;
  const subPage = dividedPathname.slice(-1)[0] as SubPage;
  return {
    page: page,
    subPage: subPage,
  };
};

export const QuickAccessContainer = () => {
  const { page, subPage } = parsePathname();
  return <QuickAccess page={page} subPage={subPage} />;
};
