import React from "react";
import Layout from "../components/Shared/Layout";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import CfdCover from "../assets/img/covers/cover-cfd.jpg";
import SportsSortiesCover from "../assets/img/covers/cover-sports-sorties.jpg";
import { colors } from "../assets/css/variables/colors";
import { EspacePageTheme, PoleProps } from "./talk";

const Enjoy = () => {
  const pageFrenchTitle = "Loisir";
  const pageChineseTitle = "交流";
  const poles: PoleProps[] = [
    {
      imageSource: CfdCover,
      to: "/enjoy/cfd",
      className: "pole-cover",
      id: "cfd",
      title: "Chinese Food Day",
      description:
        "Jusqu’ici appelé Chinese Food Week, cet événement a changé de format, mais son objectif reste le même : faire découvrir au grand public la diversité et la richesse de la cuisine chinoise.",
    },
    {
      imageSource: SportsSortiesCover,
      to: "/enjoy/sports-sorties",
      className: "pole-cover",
      id: "sports-sorties",
      title: "Sports & Sorties",
      description:
        "Les activités sportives amènent les jeunes à se dépasser physiquement et mentalement, d’améliorer leur esprit d’équipe, en n’oubliant pas l’essentiel : se faire plaisir !",
    },
  ];
  const pageTheme: EspacePageTheme = {
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
      <EspaceContent poles={poles} pageTheme={pageTheme} numberOfPoles={2} />
    </Layout>
  );
};

export default Enjoy;
