import React from "react";
import { css } from "@emotion/core";
import { colors } from "../../../assets/css/variables/colors";

interface AreaTitleProps {
  titleFrench: string;
  titleChinese: string;
}

const areaTitleStyle = css`
  text-align: right;
  h1 {
    color: ${colors.ajcfWhite};
    margin-top: 0;
  }
`;

export const AreaTitle = ({ titleFrench, titleChinese }: AreaTitleProps) => {
  return (
    <div css={areaTitleStyle}>
      <h1>{titleFrench}</h1>
      <h1>{titleChinese}</h1>
    </div>
  );
};
