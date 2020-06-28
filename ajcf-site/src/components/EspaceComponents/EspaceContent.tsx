import React from "react";
import { EspacePoleCover } from "./EspacePoleCover";
import { ContentfulPoleFragmentFragment } from "../../generated/types";
import { EspacePageTheme } from "../../assets/poles/pageThemes";

interface TalkPageProps {
  poles: ContentfulPoleFragmentFragment[];
  pageTheme: EspacePageTheme;
  numberOfPoles: number;
}

export const EspaceContent = ({ poles, pageTheme, numberOfPoles }: TalkPageProps) => {
  return (
    <div className="main">
      {poles.map((pole, index) => (
        <EspacePoleCover
          key={pole.poleId || ""}
          pole={pole}
          index={index}
          pageTheme={pageTheme}
          numberOfPoles={numberOfPoles}
        />
      ))}
    </div>
  );
};
