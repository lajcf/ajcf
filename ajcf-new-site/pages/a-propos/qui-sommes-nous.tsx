import React from "react";
import { Bureau } from "../../components/APropos/WhoAreWe/BureauComponents/Bureau";
import { ContactUs } from "../../components/APropos/WhoAreWe/ContactUsComponents/ContactUs";
import { OurObjectives } from "../../components/APropos/WhoAreWe/OurObjectivesComponents/OurObjectives";
import { OurStory } from "../../components/APropos/WhoAreWe/OurStoryComponents/OurStory";
import { Summary } from "../../components/APropos/WhoAreWe/SummaryComponents/Summary";
import { Testimonies } from "../../components/APropos/WhoAreWe/TestimoniesComponents/Testimonies.tsx/Testimonies";
import styles from "../../components/APropos/WhoAreWe/WhoAreWe.module.scss";
import { Layout } from "../../components/Layout/Layout";

export default function quiSommesNous() {
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
