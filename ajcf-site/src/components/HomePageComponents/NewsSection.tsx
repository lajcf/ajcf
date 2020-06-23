import React from "react";
import { AJCFVideo } from "../Shared/AJCFVideo";
import ajcfImproImage from "../../assets/img/ajcf-impro.jpg";

export const NewsSection = () => {
  return (
    <section id="news">
      <div className="section-title">
        <h1>Prochains évènements</h1>
      </div>
      <AJCFVideo
        videoOverlayImageSource={ajcfImproImage}
        videoOverlayImageAlt="Cours d'improvisation AJCF"
        videoOverlayImageId="cours-improvisation-ajcf"
        videoSource="https://ajcf-videos.s3-eu-west-1.amazonaws.com/Impro.mov"
      />
      <div className="text-content">
        <h2>Le cours d'improvisation aura lieu le 29 Février !</h2>
        <p>
          Venez découvrir l'art de l'instant et du lâcher prise grâce à l'improvisation le temps d'un après-midi ! Au
          programme, pleins d'exercices pour développer votre créativité, votre réactivité et votre confiance en vous
        </p>
      </div>
    </section>
  );
};
