import React from "react";
import { AreaTitle } from "../../Shared/AreaTitle";
import ConferencesCover from "../../../assets/img/covers/cover-conferences.jpg";
import MemoryCover from "../../../assets/img/covers/cover-memoire.jpg";
import RightsCover from "../../../assets/img/covers/cover-ddd.jpg";
import { CoverPole, CoverPoleProps } from "../CoverPole";

export const TalkPage = () => {
  const poles: CoverPoleProps[] = [
    {
      imageSource: ConferencesCover,
      to: "/areas/talk/conferences",
      className: "talk-cover",
      poleId: "conferences",
    },
    {
      imageSource: MemoryCover,
      to: "/areas/talk/memory",
      className: "talk-cover",
      poleId: "memory",
    },
    {
      imageSource: RightsCover,
      to: "/areas/talk/rights",
      className: "talk-cover",
      poleId: "rights",
    },
  ];
  return (
    <div id="talk-page">
      <AreaTitle title="Identité / 探讨" />
      {poles.map((pole) => (
        <CoverPole key={pole.className} className={pole.className} {...pole} />
      ))}
    </div>
  );
};
