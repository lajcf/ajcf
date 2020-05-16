import React from "react";
import Layout from "../../components/Shared/layout";
import { TalkPage } from "../../components/AreaPages/TalkPage/TalkPage";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";

const Talk = () => (
  <Layout>
    <SecondarySidebar sectionName="talk" />
    <div id="body">
      <TalkPage />
    </div>
  </Layout>
);

export default Talk;
