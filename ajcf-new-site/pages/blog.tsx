import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { BlogContainer } from "../components/Blog/BlogListComponents/BlogContainer";
import { ArticlePreviewFragment } from "../types/types";

type BlogProps = { articles: ArticlePreviewFragment[] };

export default function Blog({ articles }: BlogProps) {
  return <BlogContainer articles={articles} />;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articlesResult = await graphqlClient.articlesPreviewQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
