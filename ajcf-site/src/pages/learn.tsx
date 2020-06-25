import React from "react";
import Layout from "../components/Shared/Layout";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { learnTheme } from "../assets/poles/pageThemes";
import { learnPageChineseTitle, learnPageFrenchTitle, learnPoles } from "../assets/poles/learnPoles";

const Learn = () => {
  return (
    <Layout>
      <SecondarySidebar
        sectionName="learn"
        pageTheme={learnTheme}
        poles={learnPoles}
        pageFrenchTitle={learnPageFrenchTitle}
        pageChineseTitle={learnPageChineseTitle}
      />
      <EspaceContent poles={learnPoles} pageTheme={learnTheme} numberOfPoles={2} />
    </Layout>
  );
};

export default Learn;
