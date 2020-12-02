import React from "react";
import { useRouter } from "next/router";
import { QuickAccess } from "./QuickAccess";

export type Page = "a-propos";

export type Subpage = "qui-sommes-nous" | "partenaires" | "presse";

export const QuickAccessContainer = () => {
  const { pathname } = useRouter();
  const dividedPathname = pathname.split("/");
  const page = dividedPathname.slice(-2, -1)[0] as Page;
  const subPage = dividedPathname.slice(-1)[0] as Subpage;
  return <QuickAccess page={page} subPage={subPage} />;
};
