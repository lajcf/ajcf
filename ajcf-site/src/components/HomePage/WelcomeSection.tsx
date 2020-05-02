import * as React from "react";
import AJCFWelcomeImage from "../../assets/img/ajcf-welcome.jpg";
import { LazyLoadedImage } from "../Shared/LazyLoadedImage";

const textSectionStyle: React.CSSProperties = {
  margin: "1em",
};

const imageStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export const WelcomeSection = () => {
  return (
    <section id="home">
      <LazyLoadedImage
        dominantColor="#ffffff"
        widthHeightRatio={47}
        srcLarge={AJCFWelcomeImage}
        id="ajcf-welcome"
        alt="AJCF Welcome Image"
        containerStyle={imageStyle}
      />
      <section style={textSectionStyle}>
        <h2>
          Français d’origine chinoise, Franco-Chinois, Chinois de France… Nous
          sommes l’un des visages de la France.
        </h2>
        <p>
          Créée en 2009, l’association des jeunes Chinois de France procure un
          espace d’échange, d’entraide et de développement pour les jeunes
          Français d’origine chinoise, vise à améliorer leur inclusion dans le
          paysage culturel français et à promouvoir la culture chinoise en
          France.
        </p>
      </section>
    </section>
  );
};
