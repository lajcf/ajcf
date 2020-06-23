import React from "react";
import { css } from "@emotion/core";
import ArticlePreview from "./ArticlePreview";
import { ContentfulPost } from "../../generated/types";
import { EspaceId, PoleId } from "./constants";

type RecentArticlesArgs = {
  articles: { node: ContentfulPost }[];
  espaceId: EspaceId;
  poleId: PoleId;
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

export const RecentArticles = ({ articles, espaceId, poleId }: RecentArticlesArgs) => {
  return (
    <div>
      <h2 css={titleStyle}>Recent articles</h2>
      <ul css={articlesListStyle}>
        {articles.map((article) => {
          return (
            <li key={article.node.slug}>
              <ArticlePreview article={article.node} espaceId={espaceId} poleId={poleId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
