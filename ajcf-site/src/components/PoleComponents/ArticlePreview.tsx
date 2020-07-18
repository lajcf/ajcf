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

const articleStyle = css`
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0px 4px 22px -11px rgba(0, 0, 0, 0.75);
  height: 100%;
  p {
    color: ${colors.ajcfDark};
  }
`;

interface ArticlePreviewArgs {
  article: ContentfulPostFragmentFragment;
}

export const extractArticleExcerpt = (text?: string | null) => (text ? `${text.slice(0, 300)}...` : "");

export default ({ article }: ArticlePreviewArgs) => {
  return (
    <div css={articleStyle}>
      <Link to={`/${article.pole?.espace?.espaceId}/${article.pole?.poleId}/${article.slug}`}>
        <Img alt="" fluid={article.image?.length && article.image?.length > 0 && article.image[0]?.fluid} />
        <h3 css={previewTitleStyle}>{article.title}</h3>
        <p>{moment.utc(article.date).format("LL")}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: extractArticleExcerpt(article.content?.childContentfulRichText?.html),
          }}
        />
      </Link>
    </div>
  );
};
