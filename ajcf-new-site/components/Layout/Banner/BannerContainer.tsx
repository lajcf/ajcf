import { useRouter } from "next/router";
import React from "react";
import { HomeBanner } from "../../Home/HomeComponents/BannerComponents/HomeBanner";
import styles from "./BannerContainer.module.scss";

export const BannerContainer = () => {
  const { pathname } = useRouter();
  switch (pathname) {
    case "/":
      return <HomeBanner />;
    case "/blog":
      return (
        <div className={styles.bannerContainer}>
          <img src={require("../../../public/banners/blog-banner.png")} />
          <h1 className={styles.bannerTitle}>Blog</h1>
        </div>
      );
    default:
      return null;
  }
};
