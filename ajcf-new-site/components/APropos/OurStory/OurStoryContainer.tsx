import React from "react";
import { Layout } from "../../Layout/Layout";
import { BureauListContainer } from "./BureauComponents/BureauListContainer";
import { OurStoryContactUsContainer } from "./ContactUsComponents/OurStoryContactUsContainer";
import { OurObjectivesContainer } from "./OurObjectivesComponents/OurObjectivesContainer";
import { StoryOfAJCFContainer } from "./StoryOfAJCFContainerComponents/StoryOfAJCFContainer";
import { OurStorySummaryContainer } from "./OurStorySummaryComponents/OurStorySummaryContainer";
import { TestimoniesContainer } from "./TestimoniesComponents/TestimoniesContainer";
import styles from "./OurStory.module.scss";

export const OurStoryContainer = () => {
  return (
    <Layout className={styles.layout}>
      <OurStorySummaryContainer />
      <StoryOfAJCFContainer />
      <OurObjectivesContainer />
      <TestimoniesContainer />
      <BureauListContainer />
      <OurStoryContactUsContainer />
    </Layout>
  );
};
