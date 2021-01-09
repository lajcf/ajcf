import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { BlogList } from "../components/Blog/BlogListComponents/BlogList";
import { Article, __EnumValue } from "../types/types";

export default function Blog({ articles, blogLabels }: { articles: Article[]; blogLabels: __EnumValue[] }) {
  return <BlogList articles={articles} blogLabels={blogLabels} />;
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const articlesResult = await graphqlClient.articlesQuery();
  const blogLabelsResult = await graphqlClient.blogLabelsQuery();
  return {
    props: {
      articles: articlesResult.articles,
      blogLabels: blogLabelsResult.__type?.enumValues,
    },
  };
};
