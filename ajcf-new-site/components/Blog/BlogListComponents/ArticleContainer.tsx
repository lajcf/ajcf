import React from "react";
import { Layout } from "../../Layout/Layout";
import { ArticleRecommendations } from "./ArticleRecommendations";
import { ArticlePreviewFragment, ArticlePageFragment } from "../../../types/types";
import { Article } from "./Article";

export type ArticleContainerProps = {
  article: ArticlePageFragment;
  articles: ArticlePreviewFragment[];
};

export const ArticleContainer = ({ article, articles }: ArticleContainerProps) => {
  return (
    <Layout>
      <Article article={article} />
      <hr />
      <ArticleRecommendations article={article} articles={articles} />
    </Layout>
  );
};
