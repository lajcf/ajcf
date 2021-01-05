import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { BlogList } from "../components/Blog/BlogListComponents/BlogList";
import { Article } from "../types/types";

export default function Blog({ articles }: { articles: Article[] }) {
  return <BlogList articles={articles} />;
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const articlesResult = await graphqlClient.ArticlesQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
