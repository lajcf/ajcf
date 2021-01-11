import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleContainer } from "../../components/Blog/BlogListComponents/ArticleContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { ArticlePageFragment } from "../../types/types";

export type ArticleProps = { article?: ArticlePageFragment | null };

export default function Article({ article }: ArticleProps) {
  if (!article) throw new Error("article not found");
  return <ArticleContainer article={article} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesMetaResult = await graphqlClient.articlesMetaQuery();
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, { id: string }> = async ({ params }) => {
  const articlePageResult = await graphqlClient.articlePageQuery({ id: params?.id || "" });
  return {
    props: {
      article: articlePageResult.article,
    },
  };
};
