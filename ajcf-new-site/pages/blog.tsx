import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { BlogContainer } from "../components/Blog/BlogListComponents/BlogContainer";
import { ArticleFragment } from "../types/types";

type BlogProps = { articles: ArticleFragment[] };

export default function Blog({ articles }: BlogProps) {
  return <BlogContainer articles={articles} />;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articlesResult = await graphqlClient.articlesQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
