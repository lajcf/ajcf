import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

const dontShowBreadcrumbs = (pathname: string) => {
  if (pathname === "/" || pathname.includes("[id]")) return true;
  return false;
};

export const BreadcrumbsContainer = () => {
  const { pathname } = useRouter();
  if (dontShowBreadcrumbs(pathname)) {
    return null;
  }
  const pathSplitArray = pathname.split("/");
  const breadcrumbsPathArray = pathSplitArray.slice(1);

  return <Breadcrumbs breadcrumbsPathArray={breadcrumbsPathArray} />;
};