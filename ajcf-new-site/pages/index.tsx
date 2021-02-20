import { GetStaticProps } from "next";
import React from "react";
import { Home } from "../components/Home/Home";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../lib/utils/mapEnvToStage";
import { ArticlePreviewFragment } from "../types/types";

type IndexProps = { articles: ArticlePreviewFragment[] };
export default function Index({ articles }: IndexProps) {
  return <Home articles={articles} />;
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
