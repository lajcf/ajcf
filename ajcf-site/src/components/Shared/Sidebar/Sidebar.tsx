import React from "react";
import Scrollspy from "react-scrollspy";
import Tab, { TabProps } from "./Tab";
import { SocialIcons } from "./SocialIcons";
import { AreaPageTheme } from "../../../pages/talk";
import { colors } from "../../../assets/css/variables/colors";

const Sidebar = () => {
  const [tabs] = React.useState<TabProps[]>([
    { content: "Accueil", sectionId: "welcome", href: "/#welcome", className: "main-link" },
    { content: "Espaces", sectionId: "areas", href: "/#areas", className: "main-link" },
    { content: "Actualités", sectionId: "news", href: "/#news", className: "main-link" },
    { content: "À propos", sectionId: "about", href: "/#about", className: "main-link" },
  ]);
  const pageTheme: AreaPageTheme = {
    mainColor: colors.colorEnjoy,
    mainColorLight: colors.colorEnjoyLight,
    secondaryColor: colors.colorTalk,
    secondaryColorLight: colors.colorTalkLight,
    secondaryColorLighter: colors.colorTalkLight,
    secondaryColorLightest: colors.colorTalkLight,
  };
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy items={tabs.map((s) => s.sectionId)} currentClassName="active" offset={-500}>
            {tabs.map((tab) => (
              <Tab key={tab.sectionId} {...tab} />
            ))}
          </Scrollspy>
        </nav>
        <SocialIcons pageTheme={pageTheme} />
      </div>
    </section>
  );
};

export default Sidebar;
