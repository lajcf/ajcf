import React from "react";
import { ArticlePreviewFragment } from "../../types/types";
import { Layout } from "../Layout/Layout";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";
import { Carousel } from "./HomeComponents/CarouselComponents/Carousel";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { Espaces } from "./HomeComponents/EspacesComponents/Espaces";
import { Partners } from "./HomeComponents/PartnersComponents/Partners";
import { Stats } from "./HomeComponents/StatsComponents/Stats";

export const Home = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <Espaces />
      <Carousel articles={articles} />
      <Stats />
      <Partners />
      <Education />
      <Antennes />
    </Layout>
  );
};
