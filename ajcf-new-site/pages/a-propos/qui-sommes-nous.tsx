import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/APropos/WhoAreWe/BannerComponents/Banner";
import { Summary } from "../../components/APropos/WhoAreWe/SummaryComponents/Summary";
import { OurStory } from "../../components/APropos/WhoAreWe/OurStoryComponents/OurStory";
import { OurObjectives } from "../../components/APropos/WhoAreWe/OurObjectivesComponents/OurObjectives";
import { Testimonies } from "../../components/APropos/WhoAreWe/TestimoniesComponents/Testimonies.tsx/Testimonies";
import { Bureau } from "../../components/APropos/WhoAreWe/BureauComponents/Bureau";
import { ContactUs } from "../../components/APropos/WhoAreWe/ContactUsComponents/ContactUs";

export default () => {
  return (
    <Layout>
      <Banner />
      <Summary />
      <OurStory />
      <OurObjectives />
      <Testimonies />
      <Bureau />
      <ContactUs />
    </Layout>
  );
};
