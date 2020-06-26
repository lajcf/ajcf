import React from "react";
import Layout from "../components/Shared/Layout";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { meetTheme } from "../assets/poles/pageThemes";
import { meetPageFrenchTitle, meetPageChineseTitle, meetPoles } from "../assets/poles/meetPoles";

const Meet = () => {
  return (
    <Layout>
      <SecondarySidebar
        sectionName="meet"
        pageTheme={meetTheme}
        poles={meetPoles}
        pageFrenchTitle={meetPageFrenchTitle}
        pageChineseTitle={meetPageChineseTitle}
      />
      <EspaceContent poles={meetPoles} pageTheme={meetTheme} numberOfPoles={2} />
    </Layout>
  );
};

export default Meet;
