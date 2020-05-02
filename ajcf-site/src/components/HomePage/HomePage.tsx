import React from "react";
import { WelcomeSection } from "./WelcomeSection";
import { AreasSection } from "./AreasSection";
import { NewsSection } from "./NewsSection";
import { AboutSection } from "./AboutSection";

const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      <AreasSection />
      <NewsSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
