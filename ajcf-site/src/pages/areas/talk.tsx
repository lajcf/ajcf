import React from "react";
import Layout from "../../components/Shared/layout";
import { AreaPage } from "../../components/AreaPages/AreaPage";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import ConferencesCover from "../../assets/img/covers/cover-conferences.jpg";
import MemoryCover from "../../assets/img/covers/cover-memoire.jpg";
import RightsCover from "../../assets/img/covers/cover-ddd.jpg";
import { colors } from "../../assets/css/variables/colors";
import { TalkPoleId } from "../../components/Shared/constants";

export interface AreaPageTheme {
  mainColor: string;
  mainColorLight: string;
  secondaryColor: string;
  secondaryColorLight: string;
  secondaryColorLighter: string;
  secondaryColorLightest: string;
}

export interface PoleProps {
  className: string;
  imageSource: string;
  to: string;
  id: TalkPoleId;
  title: string;
  description: string;
}

const Talk = () => {
  const pageFrenchTitle = "Identité";
  const pageChineseTitle = "探讨";
  const poles: PoleProps[] = [
    {
      imageSource: ConferencesCover,
      to: "/areas/talk/conferences",
      className: "pole-cover",
      id: "conferences",
      title: "Conférences & Débats",
      description:
        "Le pôle “Conférences-débats” explore des thématiques en rapport à l’histoire commune et le profil culturel des Français d’origine chinoise. Des sujets touchant à la culture chinoise et l’actualité de la Chine contemporaine y sont également discutés. Ce lieu d’échange permet ainsi aux membres de l’association de partager leurs réflexions, leurs vécus et leurs ressentis, autour de questions qui les touchent directement.",
    },
    {
      imageSource: MemoryCover,
      to: "/areas/talk/memory",
      className: "pole-cover",
      id: "memory",
      title: "Mémoire",
      description:
        "L’AJCF intervient en milieu scolaire à travers des projections-débats qui s’appuient sur le film de Karim HOUFAID, Les travailleurs chinois de la Grande Guerre (14-18).",
    },
    {
      imageSource: RightsCover,
      to: "/areas/talk/rights",
      className: "pole-cover",
      id: "rights",
      title: "Défense des Droits",
      description:
        "L’AJCF intervient en milieu scolaire à travers des projections-débats qui s’appuient sur le film de Karim HOUFAID, Les travailleurs chinois de la Grande Guerre (14-18).",
    },
  ];
  const pageTheme: AreaPageTheme = {
    mainColor: colors.colorTalk,
    mainColorLight: colors.colorTalkLight,
    secondaryColor: colors.colorEnjoy,
    secondaryColorLight: colors.colorEnjoyLight,
    secondaryColorLighter: colors.colorEnjoyLighter,
    secondaryColorLightest: colors.colorEnjoyLightest,
  };
  return (
    <Layout>
      <SecondarySidebar
        sectionName="talk"
        pageTheme={pageTheme}
        poles={poles}
        pageFrenchTitle={pageFrenchTitle}
        pageChineseTitle={pageChineseTitle}
      />
      <AreaPage poles={poles} pageTheme={pageTheme} />
    </Layout>
  );
};

export default Talk;
