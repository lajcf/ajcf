import React from "react";
import Layout from "../../components/Shared/layout";
import { AreaPage } from "../../components/AreaPages/AreaPage";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import DevPersoCover from "../../assets/img/covers/cover-dev-perso.jpg";
import EchangeLinguistiqueCover from "../../assets/img/covers/cover-echange-linguistique.jpg";
import { colors } from "../../assets/css/variables/colors";
import { AreaPageTheme, PoleProps } from "./talk";

const Learn = () => {
  const pageFrenchTitle = "Découverte";
  const pageChineseTitle = "体会";
  const poles: PoleProps[] = [
    {
      imageSource: DevPersoCover,
      to: "/areas/learn/developpement-personnel",
      className: "pole-cover",
      id: "devPerso",
      title: "Développement personnel",
      description:
        "La participation à des ateliers (impro, théâtre, prise de parole, …) permet aux membres de l’association de s’épanouir et de se réaliser dans une meilleure connaissance de soi.",
    },
    {
      imageSource: EchangeLinguistiqueCover,
      to: "/areas/talk/echange-linguistique",
      className: "pole-cover",
      id: "echangeLinguistique",
      title: "Echange linguistique",
      description:
        "Toutes les deux semaines, l’AJCF met en place un échange entre sinophones et francophones souhaitant apprendre ou pratiquer la langue de leur partenaire linguistique.",
    },
  ];
  const pageTheme: AreaPageTheme = {
    mainColor: colors.colorLearn,
    mainColorLight: colors.colorLearnLight,
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

export default Learn;
