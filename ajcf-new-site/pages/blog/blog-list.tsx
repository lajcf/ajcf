import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { Article } from "../../types/types";

export const ArticlePreview = ({ article }: { article: Article }) => {
  console.log(article);
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <img src={article.cover.url} />
    </div>
  );
};

export default function BlogList({ articles }: { articles: Article[] }) {
  return (
    <>
      <h1>Blog</h1>
      <ArticlePreview article={articles[0]} />
    </>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const articlesResult = await graphqlClient.ArticlesQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
