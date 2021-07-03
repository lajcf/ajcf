import { useRouter } from "next/router";
import React from "react";
import { HomeBanner } from "../../Home/HomeComponents/HomeBannerComponents/HomeBanner";
import styles from "./BannerContainer.module.scss";
import { AJCFImage } from "../../../lib/utils/AJCFImage";
import banner from "../../../public/banners/blog-banner.png";

export const BannerContainer = () => {
  const { pathname } = useRouter();
  switch (pathname) {
    case "/":
      return <HomeBanner />;
    case "/blog":
      return (
        <div className={styles.bannerContainer}>
          <AJCFImage src={banner} />
          <h1 className={styles.bannerTitle}>Blog</h1>
        </div>
      );
    default:
      return null;
  }
};
