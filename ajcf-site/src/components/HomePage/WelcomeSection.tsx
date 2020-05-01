import * as React from 'react';
import AJCFWelcomeImage from "../../assets/img/ajcf-welcome.jpg";
import { LazyLoadedImage } from "../Shared/LazyLoadedImage";


export const WelcomeSection = () => {
  return (
    <section id="home">
      <LazyLoadedImage
        dominantColor="#FCECBB"
        widthHeightRatio={47}
        srcLarge={AJCFWelcomeImage}
        id="ajcf-welcome"
        alt="AJCF Welcome Image"
      />
  </section>
  );
};
