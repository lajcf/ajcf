import React from "react";
import { SecondarySidebar } from "../../../components/Shared/SecondarySidebar/SecondarySidebar";
import Layout from "../../../components/Shared/layout";
import { ConferencesPage } from "../../../components/AreaPages/TalkPage/ConferencesPage";

const Conferences = () => {
  return (
    <Layout>
      <SecondarySidebar sectionName="talk" />
      <ConferencesPage />
    </Layout>
  );
};

export default Conferences;
