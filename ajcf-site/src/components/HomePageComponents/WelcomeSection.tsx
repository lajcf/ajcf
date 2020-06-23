import * as React from "react";
import Img from "gatsby-image";
import { ImageSharpFluid } from "../../../gatsby-graphql";

interface WelcomeSectionProps {
  coverImage?: ImageSharpFluid | null;
}

const imageStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export const WelcomeSection = ({ coverImage }: WelcomeSectionProps) => {
  return (
    <section id="welcome">
      <Img style={imageStyle} fluid={coverImage} alt="Memoire cover" />
      <div className="text-content">
        <h2>
          Français d’origine chinoise, Franco-Chinois, Chinois de France… Nous sommes l’un des visages de la France.
        </h2>
        <p>
          Créée en 2009, l’association des jeunes Chinois de France procure un espace d’échange, d’entraide et de
          développement pour les jeunes Français d’origine chinoise, vise à améliorer leur inclusion dans le paysage
          culturel français et à promouvoir la culture chinoise en France.
        </p>
      </div>
    </section>
  );
};
