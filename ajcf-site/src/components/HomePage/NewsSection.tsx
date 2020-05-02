import React from "react";
import { AJCFVideo } from "../common/AJCFVideo";
import ajcfImproImage from "../../assets/img/ajcf-impro.jpg";

const imageContainerStyle = {
  marginTop: 26,
  position: "relative",
  borderRadius: "10px",
  width: "50%",
  maxWidth: "none",
} as const;

const imageInnerContainerStyle = {
  borderRadius: "10px",
  zIndex: 1,
};

const imageStyle = {
  cursor: "pointer",
};

export const NewsSection = () => {
  return (
    <section id="news">
      <h1>Prochains évènements</h1>
      <AJCFVideo
        containerStyle={imageContainerStyle}
        videoOverlayImageSource={ajcfImproImage}
        videoOverlayImageContainerStyle={imageInnerContainerStyle}
        videoOverlayImageStyle={imageStyle}
        videoOverlayImageAlt="Cours d'improvisation AJCF"
        videoOverlayImageId="cours-improvisation-ajcf"
        videoSource="https://ajcf-videos.s3-eu-west-1.amazonaws.com/Impro.mov"
      />
    </section>
  );
};
