import React from "react";
import { WelcomeSection } from "./WelcomeSection";
import { EspacesSection } from "./EspacesSection";
import { NewsSection } from "./NewsSection";
import { AboutSection } from "./AboutSection";
import { ContentfulPost, ImageSharpFluid } from "../../generated/types";

interface HomePageProps {
  homePageImages: ImageSharpFluid[];
  articles: ContentfulPost[];
}

const HomePageContent = ({ homePageImages, articles }: HomePageProps) => {
  return (
    <div className="main">
      <WelcomeSection coverImage={homePageImages.find((image) => image.src.includes("ajcf-welcome.jpg"))} />
      <EspacesSection espaceImages={homePageImages.filter((image) => image.src.includes("espace"))} />
      <NewsSection articles={articles} />
      <AboutSection />
    </div>
  );
};

export default HomePageContent;
