import React from "react";
import { css } from "@emotion/core";
import { CoverPole } from "./CoverPole";
import { sizes } from "../../assets/css/variables/sizes";
import { AreaPageTheme, PoleProps } from "../../pages/talk";

interface TalkPageProps {
  poles: PoleProps[];
  pageTheme: AreaPageTheme;
  numberOfPoles: number;
}

export const AreaPage = ({ poles, pageTheme, numberOfPoles }: TalkPageProps) => {
  const areaPolesStyle = css({
    height: `calc(100vh - ${sizes.headerHeight})`,
    marginLeft: sizes.secondarySidebarWidth,
  });
  return (
    <div css={areaPolesStyle}>
      {poles.map((pole, index) => (
        <CoverPole
          key={pole.className}
          className={pole.className}
          imageSource={pole.imageSource}
          to={pole.to}
          id={pole.id}
          title={pole.title}
          description={pole.description}
          index={index}
          pageTheme={pageTheme}
          numberOfPoles={numberOfPoles}
        />
      ))}
    </div>
  );
};
