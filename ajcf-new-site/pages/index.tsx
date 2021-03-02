import { GetStaticProps } from "next";
import React from "react";
import { HomeContainer } from "../components/Home/HomeContainer";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../lib/utils/mapEnvToStage";
import { ArticlePreviewFragment } from "../types/types";

type IndexProps = { articles: ArticlePreviewFragment[] };
export default function Index({ articles }: IndexProps) {
  return <HomeContainer articles={articles} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const articlesResult = await graphqlClient.articlesPreviewPartialQuery({
    stage: mapEnvToStage(process.env.ENV),
    numberOfArticles: 3,
  });
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
