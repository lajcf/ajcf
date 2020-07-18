import React from "react";
import { orderBy } from "lodash";
import { css } from "@emotion/core";
import { ContentfulPostFragmentFragment } from "../../generated/types";
import ArticlePreview from "../PoleComponents/ArticlePreview";

export interface AllArticlesProps {
  articles: { node: ContentfulPostFragmentFragment }[];
  poleTitle?: string | null;
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
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 5vmin;
`;

export const AllArticles = ({ articles, poleTitle }: AllArticlesProps) => {
  const title = poleTitle ? `Tous les articles - ${poleTitle}` : `Tous les articles`;
  return (
    <div className="main">
      <div css={contentStyle}>
        <h2 css={titleStyle}>{title}</h2>
        <ul css={articlesListStyle}>
          {orderBy(articles, (article) => article.node.date, "desc").map((article) => {
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
