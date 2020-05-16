import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { TalkPoleId } from "../Shared/constants";
import { sizes } from "../../assets/css/variables/sizes";
import { colors } from "../../assets/css/variables/colors";

export interface CoverPoleProps {
  className: string;
  imageSource: string;
  to: string;
  poleId: TalkPoleId;
  description: string;
}

const coverPoleSectionStyle = (index: number): React.CSSProperties => ({
  display: "flex",
  flexDirection: "row",
  height: `calc((100vh - ${sizes.headerHeight}) / 3)`,
  // textAlign: "end",
  backgroundColor: index % 2 === 0 ? colors.alternateBgColor : colors.ajcfWhite,
});

const coverPoleStyle = css({
  height: "100%",
});

export const CoverPole = ({ imageSource, to, index, description }: CoverPoleProps & { index: number }) => {
  return (
    <div style={coverPoleSectionStyle(index)}>
      <p>{description}</p>
      <Link to={to}>
        <img src={imageSource} alt="" css={coverPoleStyle} />
      </Link>
    </div>
  );
};
