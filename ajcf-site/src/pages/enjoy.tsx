import React from "react";
import Layout from "../components/Shared/Layout";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { enjoyTheme } from "../assets/poles/pageThemes";
import { enjoyPoles, enjoyPageChineseTitle, enjoyPageFrenchTitle } from "../assets/poles/enjoyPoles";

const Enjoy = () => {
  return (
    <Layout>
      <SecondarySidebar
        sectionName="talk"
        pageTheme={enjoyTheme}
        poles={enjoyPoles}
        pageFrenchTitle={enjoyPageFrenchTitle}
        pageChineseTitle={enjoyPageChineseTitle}
      />
      <EspaceContent poles={enjoyPoles} pageTheme={enjoyTheme} numberOfPoles={2} />
    </Layout>
  );
};

export default Enjoy;
