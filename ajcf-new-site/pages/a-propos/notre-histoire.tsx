import React from "react";
import { Bureau } from "../../components/APropos/OurStory/BureauComponents/Bureau";
import { ContactUs } from "../../components/APropos/OurStory/ContactUsComponents/ContactUs";
import { OurObjectives } from "../../components/APropos/OurStory/OurObjectivesComponents/OurObjectives";
import { OurStory } from "../../components/APropos/OurStory/OurStoryComponents/OurStory";
import { Summary } from "../../components/APropos/OurStory/SummaryComponents/Summary";
import { Testimonies } from "../../components/APropos/OurStory/TestimoniesComponents/Testimonies.tsx/Testimonies";
import styles from "../../components/APropos/OurStory/WhoAreWe.module.scss";
import { Layout } from "../../components/Layout/Layout";

export default function QuiSommesNous() {
  return (
    <Layout className={styles.layout}>
      <Summary />
      <OurStory />
      <OurObjectives />
      <Testimonies />
      <Bureau />
      <ContactUs />
    </Layout>
  );
}
