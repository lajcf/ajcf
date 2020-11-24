import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/APropos/WhoAreWe/BannerComponents/Banner";
import { Summary } from "../../components/APropos/WhoAreWe/SummaryComponents/Summary";
import { OurStory } from "../../components/APropos/WhoAreWe/OurStoryComponents/OurStory";
import { OurObjectives } from "../../components/APropos/WhoAreWe/OurObjectivesComponents/OurObjectives";
import { Testimonies } from "../../components/APropos/WhoAreWe/Testimonies.tsx/Testimonies";

export default () => {
  return (
    <Layout>
      <Banner />
      <Summary />
      <OurStory />
      <OurObjectives />
      <Testimonies />
    </Layout>
  );
};
