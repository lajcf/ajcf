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
  console.log("hahaha");
  const articlesMetaResult = await graphqlClient.articlesMetaQuery({ stage: mapEnvToStage() });
  console.log("hehehe");
  console.log(articlesMetaResult);
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, { id: string }> = async ({ params }) => {
  console.log("HAHAHA");
  console.log(params);
  const articlePageResult = await graphqlClient.articlePageQuery({
    id: params?.id || "",
    stage: mapEnvToStage(),
  });
  console.log("HEHEHE");
  console.log(articlePageResult);
  const articlesResult = await graphqlClient.articlesPreviewQuery({ stage: mapEnvToStage() });
  console.log("HOHOHO");
  console.log(articlesResult);
  if (!articlePageResult.article) throw new Error("article not found");
  console.log("HUHUHU");
  return {
    props: {
      initialArticle: articlePageResult.article,
      articles: articlesResult.articles,
    },
  };
};
