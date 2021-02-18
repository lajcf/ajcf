import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { useRef } from "react";
import { ArticlePreviewFragment } from "../../../../types/types";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";

export const CarouselContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const slider = useRef() as any;
  return (
    <section className={styles.carouselSection}>
      <LeftOutlined className={styles.leftArrow} onClick={() => slider.current.prev()} />
      <Carousel
        className={styles.carousel}
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        {articles.map((article) => (
          <CarouselItem article={article} key={article.id} />
        ))}
      </Carousel>
      <RightOutlined className={styles.rightArrow} onClick={() => slider.current.next()} />
    </section>
  );
};
