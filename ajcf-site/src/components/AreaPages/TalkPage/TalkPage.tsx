import React from "react";
import { css } from "@emotion/core";
import ConferencesCover from "../../../assets/img/covers/cover-conferences.jpg";
import MemoryCover from "../../../assets/img/covers/cover-memoire.jpg";
import RightsCover from "../../../assets/img/covers/cover-ddd.jpg";
import { CoverPole, CoverPoleProps } from "../CoverPole";
import { sizes } from "../../../assets/css/variables/sizes";

export const TalkPage = () => {
  const poles: CoverPoleProps[] = [
    {
      imageSource: ConferencesCover,
      to: "/areas/talk/conferences",
      className: "pole-cover",
      poleId: "conferences",
      description:
        "Le pôle “Conférences-débats” explore des thématiques en rapport à l’histoire commune et le profil culturel des Français d’origine chinoise. Des sujets touchant à la culture chinoise et l’actualité de la Chine contemporaine y sont également discutés. Ce lieu d’échange permet ainsi aux membres de l’association de partager leurs réflexions, leurs vécus et leurs ressentis, autour de questions qui les touchent directement.",
    },
    {
      imageSource: MemoryCover,
      to: "/areas/talk/memory",
      className: "pole-cover",
      poleId: "memory",
      description: "",
    },
    {
      imageSource: RightsCover,
      to: "/areas/talk/rights",
      className: "pole-cover",
      poleId: "rights",
      description: "",
    },
  ];
  const areaPolesStyle = css({
    height: `calc(100vh - ${sizes.headerHeight})`,
    marginLeft: sizes.secondarySidebarWidth,
  });
  return (
    <div css={areaPolesStyle}>
      {poles.map((pole, index) => (
        <CoverPole key={pole.className} className={pole.className} {...pole} index={index} />
      ))}
    </div>
  );
};
