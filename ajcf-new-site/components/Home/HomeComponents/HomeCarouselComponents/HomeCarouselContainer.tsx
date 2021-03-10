import React from "react";
import { ArticlePreviewFragment } from "../../../../types/types";
import styles from "./HomeCarousel.module.scss";
import { HomeCarouselItem } from "./HomeCarouselItem";
import { CustomCarousel } from "../../../../lib/utils/CustomCarouselComponents/CustomCarousel";

export const HomeCarouselContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <section className={styles.carouselSection}>
      <CustomCarousel>
        {articles.map((article) => (
          <HomeCarouselItem article={article} key={article.id} />
        ))}
      </CustomCarousel>
    </section>
  );
};
