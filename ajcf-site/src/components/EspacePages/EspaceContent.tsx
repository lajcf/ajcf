import React from "react";
import { CoverPole } from "./CoverPole";
import { AreaPageTheme, PoleProps } from "../../pages/talk";

interface TalkPageProps {
  poles: PoleProps[];
  pageTheme: AreaPageTheme;
  numberOfPoles: number;
}

export const EspaceContent = ({ poles, pageTheme, numberOfPoles }: TalkPageProps) => {
  return (
    <div className="main">
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
