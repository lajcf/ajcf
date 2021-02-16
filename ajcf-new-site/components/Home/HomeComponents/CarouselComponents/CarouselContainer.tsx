import { Carousel } from "antd";
import React from "react";
import { ArticlePreviewFragment } from "../../../../types/types";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";

export const CarouselContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <section className={styles.carouselContainer}>
      <Carousel className={styles.carousel}>
        {articles.map((article) => (
          <CarouselItem article={article} key={article.id} />
        ))}
      </Carousel>
    </section>
  );
};
