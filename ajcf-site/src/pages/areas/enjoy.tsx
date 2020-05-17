import React from "react";
import Layout from "../../components/Shared/layout";
import { AreaPage } from "../../components/AreaPages/AreaPage";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import CfdCover from "../../assets/img/covers/cover-cfd.jpg";
import SportsSortiesCover from "../../assets/img/covers/cover-sports-sorties.jpg";
import { colors } from "../../assets/css/variables/colors";
import { AreaPageTheme, PoleProps } from "./talk";

const Enjoy = () => {
  const pageFrenchTitle = "Loisir";
  const pageChineseTitle = "交流";
  const poles: PoleProps[] = [
    {
      imageSource: CfdCover,
      to: "/areas/learn/cfd",
      className: "pole-cover",
      id: "cfd",
      title: "Chinese Food Day",
      description:
        "Jusqu’ici appelé Chinese Food Week, cet événement a changé de format, mais son objectif reste le même : faire découvrir au grand public la diversité et la richesse de la cuisine chinoise.",
    },
    {
      imageSource: SportsSortiesCover,
      to: "/areas/talk/sports-sorties",
      className: "pole-cover",
      id: "sportsSorties",
      title: "Sports & Sorties",
      description:
        "Les activités sportives amènent les jeunes à se dépasser physiquement et mentalement, d’améliorer leur esprit d’équipe, en n’oubliant pas l’essentiel : se faire plaisir !",
    },
  ];
  const pageTheme: AreaPageTheme = {
    mainColor: colors.colorEnjoy,
    mainColorLight: colors.colorEnjoyLight,
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

export default Enjoy;
