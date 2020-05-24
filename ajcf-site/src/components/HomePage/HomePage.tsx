import React from "react";
import { WelcomeSection } from "./WelcomeSection";
import { EspacesSection } from "./EspacesSection";
import { NewsSection } from "./NewsSection";
import { AboutSection } from "./AboutSection";
import { ImageSharpFluid } from "../../../gatsby-graphql";

interface HomePageProps {
  homePageImages: ImageSharpFluid[];
}

const HomePage = ({ homePageImages }: HomePageProps) => {
  return (
    <div className="body">
      <WelcomeSection coverImage={homePageImages.find((image) => image.src.includes("ajcf-welcome.jpg"))} />
      <EspacesSection espaceImages={homePageImages.filter((image) => image.src.includes("espace"))} />
      <NewsSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
