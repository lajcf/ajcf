import React, { CSSProperties } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";

import { css } from "@emotion/core";
import { ContentfulPost } from "../../../generated/types";
import { colors } from "../../../assets/css/variables/colors";
import { EspaceId, PoleId } from "../../../assets/poles/constants";

const previewTitleStyle = css`
  font-size: 2em;
  color: ${colors.ajcfDark};
`;

interface ArticlePreviewArgs {
  espaceId: EspaceId;
  poleId: PoleId;
  article: ContentfulPost;
}

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
