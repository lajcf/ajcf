import { GetStaticProps } from "next";
import React from "react";
import { OurAntennasContainer } from "../../../components/APropos/WhoAreWe/OurAntennasComponents/OurAntennasContainer";
import { graphqlClient } from "../../../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../../../lib/utils/mapEnvToStage";
import { ArticlePreviewFragment } from "../../../types/types";

export default function OurAntennas({ articles }: { articles: ArticlePreviewFragment[] }) {
  return <OurAntennasContainer articles={articles} />;
}
export const getStaticProps: GetStaticProps<{ articles: ArticlePreviewFragment[] }> = async () => {
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
