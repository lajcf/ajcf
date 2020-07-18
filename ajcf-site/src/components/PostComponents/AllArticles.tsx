import React from "react";
import { css } from "@emotion/core";
import { ContentfulPostFragmentFragment } from "../../generated/types";
import ArticlePreview from "../PoleComponents/ArticlePreview";

export interface AllArticlesProps {
  articles: { node: ContentfulPostFragmentFragment }[];
}

const contentStyle = css`
  margin: 2em;
`;

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

export const AllArticles = ({ articles }: AllArticlesProps) => {
  return (
    <div className="main">
      <div css={contentStyle}>
        <h2 css={titleStyle}>Tous les articles</h2>
        <ul css={articlesListStyle}>
          {articles.map((article) => {
            return (
              <li key={article.node.slug || undefined}>
                <ArticlePreview article={article.node} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
