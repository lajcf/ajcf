import { useRouter } from "next/router";
import React from "react";
import { HomeBanner } from "../../Home/HomeComponents/BannerComponents/HomeBanner";

export const BannerContainer = () => {
  const { pathname } = useRouter();
  switch (pathname) {
    case "/":
      return <HomeBanner />;
    default:
      return null;
  }
};
