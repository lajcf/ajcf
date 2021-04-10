import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleContainer } from "../../components/Blog/ArticleComponents/ArticleContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { ArticlePageFragment, ArticlePageQueryDocument, ArticlePreviewFragment } from "../../types/types";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { useActualItem } from "../../lib/graphql/useActualItem";

type ArticleProps = {
  originalArticle: ArticlePageFragment;
  articles: ArticlePreviewFragment[];
};

export default function ArticlePage({ originalArticle, articles }: ArticleProps) {
  const { updatedItem: updatedArticle } = useActualItem(ArticlePageQueryDocument, originalArticle);
  if (!updatedArticle) throw new Error(`article not found with id ${originalArticle.id}`);
  return <ArticleContainer article={updatedArticle} articles={articles} />;
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
      originalArticle: articlePageResult.article,
      articles: articlesResult.articles,
    },
  };
};
