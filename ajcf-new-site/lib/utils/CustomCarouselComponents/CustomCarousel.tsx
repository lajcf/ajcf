import React, { ReactNode, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import styles from "./CustomCarousel.module.scss";

export const CustomCarousel = ({ children, autoplay = false }: { children: ReactNode; autoplay?: boolean }) => {
  const slider: React.MutableRefObject<any> = useRef();
  return (
    <div className={styles.customCarouselContainer}>
      <LeftOutlined className={styles.leftArrow} onClick={() => slider.current.prev()} />
      <Carousel
        autoplay={autoplay}
        className={styles.carousel}
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        {children}
      </Carousel>
      <RightOutlined className={styles.rightArrow} onClick={() => slider.current.next()} />
    </div>
  );
};
