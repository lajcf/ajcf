import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { ImageSharpFluid, ContentfulPoleFragmentFragment } from "../../generated/types";

interface PoleContentProps {
  poleCover?: ImageSharpFluid | null;
  poleProps: ContentfulPoleFragmentFragment;
}

const titleStyle: React.CSSProperties = {
  textAlign: "end",
  paddingTop: "1em",
  paddingBottom: "1em",
};

const divImageStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  > div {
    position: relative;
    width: 100%;
  }
`;

export const PoleContent = ({ poleCover, poleProps }: PoleContentProps) => {
  return (
    <div>
      <h1 style={titleStyle}>{poleProps.title}</h1>
      <div css={divImageStyle}>
        <Img fluid={poleCover} alt="" />
      </div>
      <div
        className="text-content"
        dangerouslySetInnerHTML={{
          __html: poleProps.description?.childContentfulRichText?.html || "",
        }}
      />
    </div>
  );
};
