import React from "react";
import { AJCFVideo } from "../common/AJCFVideo";
import ajcfImproImage from "../../assets/img/ajcf-impro.jpg";

const imageContainerStyle = {
  marginTop: 26,
  boxShadow: "42px -42px 0px rgb(248, 249, 251)",
  position: "relative",
  borderRadius: 8,
  width: 525,
  maxWidth: "none",
} as const;

const imageInnerContainerStyle = {
  borderRadius: 5,
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
        videoOverlayImageWidthHeightRatio={64}
        videoOverlayImageDominantColor="rgb(194, 107, 81)"
        videoOverlayImageAlt="Cours d'improvisation AJCF"
        videoOverlayImageId="cours-improvisation-ajcf"
        videoSource="https://ajcf-videos.s3-eu-west-1.amazonaws.com/Impro.mov"
      />
    </section>
  );
};
