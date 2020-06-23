import React, { CSSProperties } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";

import { css } from "@emotion/core";
import { ContentfulPost } from "../../generated/types";
import { colors } from "../../assets/css/variables/colors";
import { EspaceId, PoleId } from "./constants";

const styles = css`
  .previewTitle {
    font-size: 1.5em;
  }

  .tag {
    color: #a0a0a0;
    text-decoration: none;
    display: inline-block;
    padding: 0.33333rem 0.5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #a0a0a0;
    margin-right: 0.5em;
  
`;

const previewTitleStyle = css`
  font-size: 2em;
  color: ${colors.ajcfDark};
`;

interface ArticlePreviewArgs {
  espaceId: EspaceId;
  poleId: PoleId;
  article: ContentfulPost;
}

const tagStyle: CSSProperties = {
  color: "#a0a0a0",
  textDecoration: "none",
  display: "inline-block",
  padding: "0.33333rem 0.5rem",
  lineHeight: 1,
  borderRadius: "2px",
  border: "1px solid #a0a0a0",
  marginRight: "0.5em",
};

export const extractArticleExcerpt = (text?: string | null) => (text ? `${text.slice(0, 300)}...` : "");

export default ({ article, espaceId, poleId }: ArticlePreviewArgs) => {
  console.log(article);
  return (
    <div>
      <Img alt="" fluid={article.image?.length && article.image?.length > 0 && article.image[0]?.fluid} />
      <h3 css={previewTitleStyle}>
        <Link to={`/${espaceId}/${poleId}/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{moment.utc(article.createdAt).format("LL")}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: extractArticleExcerpt(article.content?.childContentfulRichText?.html),
        }}
      />
    </div>
  );
};
