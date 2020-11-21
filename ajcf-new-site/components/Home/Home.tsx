import React from "react";
import styles from "./Home.module.scss";
import { Banner } from "./HomeComponents/BannerComponents/Banner";
import { Espaces } from "./HomeComponents/EspacesComponents/Espaces";
import { Carousel } from "./HomeComponents/CarouselComponents/Carousel";
import { Stats } from "./HomeComponents/StatsComponents/Stats";
import { Partners } from "./HomeComponents/PartnersComponents/Partners";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";

export const Home = () => {
  return (
    <main className={styles.flexContainer}>
      <div className={styles.home}>
        <Banner />
        <Espaces />
        <Carousel />
        <Stats />
        <Partners />
        <Education />
        <Antennes />
      </div>
    </main>
  );
};
