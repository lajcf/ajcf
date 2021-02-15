import React from "react";
import { Layout } from "../Layout/Layout";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";
import { Carousel } from "./HomeComponents/CarouselComponents/Carousel";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { Espaces } from "./HomeComponents/EspacesComponents/Espaces";
import { Partners } from "./HomeComponents/PartnersComponents/Partners";
import { Stats } from "./HomeComponents/StatsComponents/Stats";

export const Home = () => {
  return (
    <Layout>
      <Espaces />
      <Carousel />
      <Stats />
      <Partners />
      <Education />
      <Antennes />
    </Layout>
  );
};
