import { GetStaticProps } from "next";
import React from "react";
import { BlogContainer } from "../components/Blog/BlogListComponents/BlogContainer";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../lib/utils/mapEnvToStage";
import { ArticlePreviewFragment, ArticlesPreviewQueryDocument, ArticlesPreviewQueryQuery } from "../types/types";
import { useActualItem } from "../lib/graphql/useActualItem";

type BlogProps = { initialArticles: ArticlePreviewFragment[] };

export default function Blog({ initialArticles }: BlogProps) {
  const { actualItem: actualArticles } = useActualItem<ArticlesPreviewQueryQuery>(ArticlesPreviewQueryDocument, {
    articles: initialArticles,
  });
  if (!actualArticles?.articles) throw new Error(`List of articles not found`);
  return <BlogContainer articles={actualArticles.articles} />;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articlesResult = await graphqlClient.articlesPreviewQuery({ stage: mapEnvToStage() });
  return {
    props: {
      initialArticles: articlesResult.articles,
    },
  };
};
