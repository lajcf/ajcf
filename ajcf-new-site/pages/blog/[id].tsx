import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleContainer } from "../../components/Blog/ArticleComponents/ArticleContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import {
  ArticlePageFragment,
  ArticlePageQueryDocument,
  ArticlePageQueryQuery,
  ArticlePreviewFragment,
} from "../../types/types";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { useActualItem } from "../../lib/graphql/useActualItem";

type ArticleProps = {
  initialArticle: ArticlePageFragment;
  articles: ArticlePreviewFragment[];
};

export default function ArticlePage({ initialArticle, articles }: ArticleProps) {
  console.log("HAHAHA");
  console.log(initialArticle);
  const { actualItem: actualArticle } = useActualItem<ArticlePageQueryQuery>(
    ArticlePageQueryDocument,
    { article: initialArticle },
    initialArticle.id
  );
  if (!actualArticle?.article) throw new Error(`article not found with id ${initialArticle.id}`);
  return <ArticleContainer article={actualArticle.article} articles={articles} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesMetaResult = await graphqlClient.articlesMetaQuery({ stage: mapEnvToStage() });
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, { id: string }> = async ({ params }) => {
  const articlePageResult = await graphqlClient.articlePageQuery({
    id: params?.id || "",
    stage: mapEnvToStage(),
  });
  const articlesResult = await graphqlClient.articlesPreviewQuery({ stage: mapEnvToStage() });
  if (!articlePageResult.article) throw new Error("article not found");
  return {
    props: {
      initialArticle: articlePageResult.article,
      articles: articlesResult.articles,
    },
  };
};
