import React from "react";
import { ArticlePreviewFragment } from "../../types/types";
import { Layout } from "../Layout/Layout";
import { Antennes } from "./HomeComponents/AntennesComponents/Antennes";
import { HomeCarouselContainer } from "./HomeComponents/HomeCarouselComponents/HomeCarouselContainer";
import { Education } from "./HomeComponents/EducationComponents/Education";
import { HomeEspacesContainer } from "./HomeComponents/HomeEspacesComponents/HomeEspacesContainer";
import { HomePartnersContainer } from "./HomeComponents/HomePartnersComponents/HomePartnersContainer";
import { HomeStatsContainer } from "./HomeComponents/HomeStatsComponents/HomeStatsContainer";

export const HomeContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <HomeEspacesContainer />
      <HomeCarouselContainer articles={articles} />
      <HomeStatsContainer />
      <HomePartnersContainer />
      <Education />
      <Antennes />
    </Layout>
  );
};
