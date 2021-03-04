import React from "react";
import { ArticlePreviewFragment } from "../../types/types";
import { Layout } from "../Layout/Layout";
import { HomeAntennesContainer } from "./HomeComponents/HomeAntennesComponents/HomeAntennesContainer";
import { HomeCarouselContainer } from "./HomeComponents/HomeCarouselComponents/HomeCarouselContainer";
import { HomeEducationContainer } from "./HomeComponents/HomeEducationComponents/HomeEducationContainer";
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
      <HomeEducationContainer />
      <HomeAntennesContainer />
    </Layout>
  );
};
