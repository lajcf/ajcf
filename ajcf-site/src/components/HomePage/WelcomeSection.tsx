import * as React from "react";
import AJCFWelcomeImage from "../../assets/img/ajcf-welcome.jpg";
import { LazyLoadedImage } from "../Shared/LazyLoadedImage";

const imageStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export const WelcomeSection = () => {
  return (
    <section id="welcome">
      <LazyLoadedImage
        dominantColor="#ffffff"
        srcLarge={AJCFWelcomeImage}
        id="ajcf-welcome-image"
        alt="AJCF Welcome Image"
        containerStyle={imageStyle}
      />
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
