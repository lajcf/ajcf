import React from "react";
import { orderBy } from "lodash";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import ArticlePreview from "./ArticlePreview";
import { ContentfulPoleFragmentFragment, ContentfulPostFragmentFragment } from "../../generated/types";
import { colors } from "../../assets/css/variables/colors";

type RecentArticlesArgs = {
  articles: { node: ContentfulPostFragmentFragment }[];
  pole?: ContentfulPoleFragmentFragment | null;
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

const moreArticlesButtonStyle = css`
  text-align: center;
  margin-top: 3em;
  a {
    color: ${colors.ajcfDark};
    transition: background-color 0.1s ease-in-out;
    padding: 0.75em 1.75em;
    border-radius: 100px;
    height: 40px !important;
    box-shadow: 0px 4px 22px -11px rgba(0, 0, 0, 0.75);
  }
`;

export const RecentArticles = ({ articles, pole }: RecentArticlesArgs) => {
  return (
    <div>
      <h2 css={titleStyle}>Articles récents</h2>
      <ul css={articlesListStyle}>
        {orderBy(articles, (article) => article.node.date, "desc")
          .slice(0, 3)
          .map((article) => {
            return (
              <li key={article.node.slug || undefined}>
                <ArticlePreview article={article.node} />
              </li>
            );
          })}
      </ul>
      <div css={moreArticlesButtonStyle}>
        <Link to="/news" state={{ pole }}>
          Plus d'articles
        </Link>
      </div>
    </div>
  );
};
