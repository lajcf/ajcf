import React from "react";
import { ArticlePreviewFragment } from "../../types/types";
import { Layout } from "../Layout/Layout";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";
import { HomeCarouselContainer } from "./HomeComponents/HomeCarouselComponents/HomeCarouselContainer";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { HomeEspacesContainer } from "./HomeComponents/HomeEspacesComponents/HomeEspacesContainer";
import { Partners } from "./HomeComponents/PartnersComponents/Partners";
import { HomeStatsContainer } from "./HomeComponents/HomeStatsComponents/HomeStatsContainer";

export const HomeContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <HomeEspacesContainer />
      <HomeCarouselContainer articles={articles} />
      <HomeStatsContainer />
      <Partners />
      <Education />
      <Antennes />
    </Layout>
  );
};
