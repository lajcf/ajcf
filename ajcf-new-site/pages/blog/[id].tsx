import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleContainer } from "../../components/Blog/BlogListComponents/ArticleContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { ArticlePageFragment } from "../../types/types";

export default function Article({ article }: { article: ArticlePageFragment }) {
  return <ArticleContainer article={article} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesMetaResult = await graphqlClient.articlesMetaQuery();
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const articlePageResult = await graphqlClient.articlePageQuery({ id: params?.id || "" });
  return {
    props: {
      article: articlePageResult.article,
    },
  };
};
