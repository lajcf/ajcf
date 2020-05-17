import React from "react";
import { css } from "@emotion/core";
import { CoverPole } from "./CoverPole";
import { sizes } from "../../assets/css/variables/sizes";
import { AreaPageTheme, PoleProps } from "../../pages/areas/talk";

interface TalkPageProps {
  poles: PoleProps[];
  pageTheme: AreaPageTheme;
}

export const AreaPage = ({ poles, pageTheme }: TalkPageProps) => {
  const areaPolesStyle = css({
    height: `calc(100vh - ${sizes.headerHeight})`,
    marginLeft: sizes.secondarySidebarWidth,
  });
  return (
    <div css={areaPolesStyle}>
      {poles.map((pole, index) => (
        <CoverPole key={pole.className} className={pole.className} {...pole} index={index} pageTheme={pageTheme} />
      ))}
    </div>
  );
};
