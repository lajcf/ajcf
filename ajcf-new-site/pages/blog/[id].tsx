import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import useSWR from "swr";
import { ArticleContainer } from "../../components/Blog/ArticleComponents/ArticleContainer";
import { graphqlClient, graphqlRequest } from "../../lib/graphql/graphqlClient";
import { ArticlePreviewFragment, ArticlePageFragment, ArticlePageQueryDocument } from "../../types/types";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { print } from "graphql/language/printer";

type ArticleProps = {
  article?: ArticlePageFragment | null;
  articles: ArticlePreviewFragment[];
};

export default function ArticlePage({ article, articles }: ArticleProps) {
  const { data } = useSWR<ArticlePageFragment | null>(print(ArticlePageQueryDocument), graphqlRequest, {
    initialData: article,
  });
  if (!data) throw new Error("article not found");
  return <ArticleContainer article={data} articles={articles} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesMetaResult = await graphqlClient.articlesMetaQuery({ stage: mapEnvToStage(process.env.ENV) });
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, { id: string }> = async ({ params }) => {
  const articlePageResult = await graphqlClient.articlePageQuery({
    id: params?.id || "",
    stage: mapEnvToStage(process.env.ENV),
  });
  const articlesResult = await graphqlClient.articlesPreviewQuery({ stage: mapEnvToStage(process.env.ENV) });
  return {
    props: {
      article: articlePageResult.article,
      articles: articlesResult.articles,
    },
  };
};
