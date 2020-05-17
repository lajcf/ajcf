import React from "react";
import Layout from "../../components/Shared/layout";
import { AreaPage } from "../../components/AreaPages/AreaPage";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import ClubProCover from "../../assets/img/covers/cover-club-pro.jpg";
import RencontreMensuelleCover from "../../assets/img/covers/cover-rencontre-mensuelle.jpg";
import { colors } from "../../assets/css/variables/colors";
import { AreaPageTheme, PoleProps } from "./talk";

const Meet = () => {
  const pageFrenchTitle = "Connexion";
  const pageChineseTitle = "交流";
  const poles: PoleProps[] = [
    {
      imageSource: ClubProCover,
      to: "/areas/learn/club-pro",
      className: "pole-cover",
      id: "clubPro",
      title: "Club Pro",
      description:
        "En plus de diffuser des offres d’emploi, ce jeune pôle organise des rencontres professionnelles (les AJCF Meetup) autour d’experts du secteur et de thématiques sur la réalité du marché franco-chinois.",
    },
    {
      imageSource: RencontreMensuelleCover,
      to: "/areas/talk/rencontre-mensuelle",
      className: "pole-cover",
      id: "rencontreMensuelle",
      title: "Rencontre mensuelle",
      description: "Lorem Ipsum",
    },
  ];
  const pageTheme: AreaPageTheme = {
    mainColor: colors.colorMeet,
    mainColorLight: colors.colorMeetLight,
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

export default Meet;
