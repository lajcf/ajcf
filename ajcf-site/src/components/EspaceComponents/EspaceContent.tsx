import React from "react";
import { EspacePageTheme, PoleProps } from "../../pages/talk";
import { EspacePoleCover } from "./EspacePoleCover";

interface TalkPageProps {
  poles: PoleProps[];
  pageTheme: EspacePageTheme;
  numberOfPoles: number;
}

export const EspaceContent = ({ poles, pageTheme, numberOfPoles }: TalkPageProps) => {
  return (
    <div className="main">
      {poles.map((pole, index) => (
        <EspacePoleCover
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
