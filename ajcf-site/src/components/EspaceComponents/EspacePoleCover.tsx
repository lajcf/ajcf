import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { sizes } from "../../assets/css/variables/sizes";
import { ContentfulPoleFragmentFragment, ImageSharpFluid } from "../../generated/types";
import { EspacePageTheme } from "../../assets/poles/pageThemes";

export type CoverPoleProps = {
  pole: ContentfulPoleFragmentFragment;
  pageTheme: EspacePageTheme;
  numberOfPoles: number;
};

export const EspacePoleCover = ({ pole, index, pageTheme, numberOfPoles }: CoverPoleProps & { index: number }) => {
  const coverPoleSectionStyle = (poleIndex: number): React.CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    height: `calc((100vh - ${sizes.headerHeight}) / ${numberOfPoles})`,
    // textAlign: "end",
    backgroundColor: poleIndex % 2 === 0 ? pageTheme.secondaryColorLighter : pageTheme.secondaryColorLightest,
  });

  const coverPoleStyle = css`
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

  const learnMoreButtonStyle = css`
    text-align: end;
    a {
      color: ${pageTheme.mainColorLight};
      transition: background-color 0.1s ease-in-out;
      padding: 0.75em 1.75em;
      border-radius: 100px;
      height: 40px !important;
      box-shadow: 0 0 0.05em 0.1em ${pageTheme.mainColorLight};

      &:hover {
        background-color: ${pageTheme.secondaryColor};
      }
    }
  `;
  return (
    <div style={coverPoleSectionStyle(index)}>
      <div css={descriptionPoleStyle}>
        <div
          dangerouslySetInnerHTML={{
            __html: pole.description?.childContentfulRichText?.html || "",
          }}
        />
        <div css={learnMoreButtonStyle}>
          <Link to={pole?.slug || ""}>En savoir plus</Link>
        </div>
      </div>
      <div css={coverPoleStyle}>
        <Img imgStyle={{ objectFit: "contain" }} fluid={pole.cover?.fluid as ImageSharpFluid} alt="" />
      </div>
    </div>
  );
};
