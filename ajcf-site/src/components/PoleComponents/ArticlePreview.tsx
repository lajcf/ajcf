import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";

import { css } from "@emotion/core";
import { ContentfulPostFragmentFragment } from "../../generated/types";
import { colors } from "../../assets/css/variables/colors";

const previewTitleStyle = css`
  font-size: 2em;
  color: ${colors.ajcfDark};
`;

interface ArticlePreviewArgs {
  article: ContentfulPostFragmentFragment;
}

export const extractArticleExcerpt = (text?: string | null) => (text ? `${text.slice(0, 300)}...` : "");

export default ({ article }: ArticlePreviewArgs) => {
  return (
    <div>
      <Img alt="" fluid={article.image?.length && article.image?.length > 0 && article.image[0]?.fluid} />
      <h3 css={previewTitleStyle}>
        <Link to={`/${article.pole?.espace?.espaceId}/${article.pole?.poleId}/${article.slug}`}>{article.title}</Link>
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
