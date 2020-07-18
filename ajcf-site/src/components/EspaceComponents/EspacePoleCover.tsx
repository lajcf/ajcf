import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { sizes } from "../../assets/css/variables/sizes";
import { ContentfulPoleFragmentFragment, ImageSharpFluid } from "../../generated/types";
import { EspacePageTheme } from "../../assets/poles/pageThemes";
import { colors } from "../../assets/css/variables/colors";

export type CoverPoleProps = {
  pole: ContentfulPoleFragmentFragment;
  pageTheme: EspacePageTheme;
  numberOfPoles: number;
};

export const EspacePoleCover = ({ pole, index, pageTheme, numberOfPoles }: CoverPoleProps & { index: number }) => {
  const coverPoleSectionStyle = (poleIndex: number) => css`
    display: flex;
    flexDirection: row;
    height: calc((100vh - ${sizes.headerHeight}) / ${numberOfPoles});
    // textAlign: "end",
    backgroundColor: ${poleIndex} % 2 === 0 ? pageTheme.secondaryColorLighter : pageTheme.secondaryColorLightest;
    border-radius: 1em;
    box-shadow: 0px 4px 22px -11px rgba(0, 0, 0, 0.75);
    margin: 2em 3em;
    color: ${colors.ajcfDark}
  `;

  const coverPoleStyle = css`
    border-radius: 0 1em 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain !important;
      object-position: right !important;
    }
  `;

  const descriptionPoleStyle = css`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `;
  return (
    <Link to={pole?.slug || ""}>
      <div css={coverPoleSectionStyle(index)}>
        <div css={descriptionPoleStyle}>
          <h1>{pole.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: pole.description?.childContentfulRichText?.html || "",
            }}
          />
        </div>
        <div css={coverPoleStyle}>
          <Img imgStyle={{ objectFit: "contain" }} fluid={pole.cover?.fluid as ImageSharpFluid} alt="" />
        </div>
      </div>
    </Link>
  );
};
