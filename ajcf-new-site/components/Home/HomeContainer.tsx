import React from "react";
import { ArticlePreviewFragment } from "../../types/types";
import { Layout } from "../Layout/Layout";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";
import { CarouselContainer } from "./HomeComponents/CarouselComponents/CarouselContainer";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { Espaces } from "./HomeComponents/EspacesComponents/Espaces";
import { Partners } from "./HomeComponents/PartnersComponents/Partners";
import { Stats } from "./HomeComponents/StatsComponents/Stats";

export const HomeContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <Espaces />
      <CarouselContainer articles={articles} />
      <Stats />
      <Partners />
      <Education />
      <Antennes />
    </Layout>
  );
};
