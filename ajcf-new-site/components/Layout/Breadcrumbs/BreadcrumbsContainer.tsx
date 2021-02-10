import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export const BreadcrumbsContainer = () => {
  const { pathname } = useRouter();
  const pathArray = pathname.split("/");
  return <Breadcrumbs pathArray={pathArray} />;
};
