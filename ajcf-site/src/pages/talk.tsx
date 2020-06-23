import React from "react";
import Layout from "../components/Shared/Layout";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleId } from "../components/Shared/constants";
import { talkTheme } from "../assets/poles/pageThemes";
import { talkPageChineseTitle, talkPageFrenchTitle, talkPoles } from "../assets/poles/talkPoles";

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
  id: PoleId;
  title: string;
  description: string;
}

const Talk = () => {
  return (
    <Layout>
      <SecondarySidebar
        sectionName="talk"
        pageTheme={talkTheme}
        poles={talkPoles}
        pageFrenchTitle={talkPageFrenchTitle}
        pageChineseTitle={talkPageChineseTitle}
      />
      <EspaceContent poles={talkPoles} pageTheme={talkTheme} numberOfPoles={3} />
    </Layout>
  );
};

export default Talk;
