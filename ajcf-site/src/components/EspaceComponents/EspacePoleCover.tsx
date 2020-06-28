import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { sizes } from "../../assets/css/variables/sizes";
import { ImageSharpFluid, ContentfulPoleFragmentFragment } from "../../generated/types";
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
    max-width: 505px;
    width: auto;
    > img {
      max-height: 270px;
      height: auto;
    }
  `;

  const descriptionPoleStyle = css`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  console.log(pole.cover);
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
      <Img css={coverPoleStyle} fluid={pole.cover?.fluid as ImageSharpFluid} alt="" />
    </div>
  );
};
