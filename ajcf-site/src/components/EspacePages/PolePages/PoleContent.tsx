import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { ImageSharpFluid } from "../../../../gatsby-graphql";

interface PoleContentProps {
  poleCover?: ImageSharpFluid;
}

const titleStyle: React.CSSProperties = {
  textAlign: "end",
  padding: "1em",
};

const divImageStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  > div {
    position: relative;
    width: 80%;
  }
`;

export const PoleContent = ({ poleCover }: PoleContentProps) => {
  return (
    <div className="main">
      <h1 style={titleStyle}>Mémoire</h1>
      <div css={divImageStyle}>
        <Img fluid={poleCover} alt="Memoire cover" />
      </div>
      <div className="text-content">
        <p>
          L’espace “Conférences-débats” explore des thématiques en rapport à l’histoire commune et le profil culturel
          des Français d’origine chinoise. Des sujets touchant à la culture chinoise et l’actualité de la Chine
          contemporaine y sont également discutés. Ce lieu d’échange permet ainsi aux membres de l’association de
          partager leurs réflexions, leurs vécus et leurs ressentis, autour de questions qui les touchent directement.
          Les activités organisées dans cet Espace se présentent sous des formats divers : questionnaires, témoignages,
          cafés-débats, interviews...
        </p>
      </div>
    </div>
  );
};
