import React from "react";
import { css } from "@emotion/core";
import ArticlePreview from "./ArticlePreview";
import { ContentfulPostFragmentFragment } from "../../generated/types";

type RecentArticlesArgs = {
  articles: { node: ContentfulPostFragmentFragment }[];
};

const titleStyle = css`
  padding: 1em 0;
  border-bottom: 1px solid #ddd;
`;

const articlesListStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
`;

export const RecentArticles = ({ articles }: RecentArticlesArgs) => {
  return (
    <div>
      <h2 css={titleStyle}>Articles récents</h2>
      <ul css={articlesListStyle}>
        {articles.map((article) => {
          console.log(article);
          return (
            <li key={article.node.slug || undefined}>
              <ArticlePreview article={article.node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
