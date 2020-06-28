import React from "react";
import { Espace } from "./Espace";
import AJCFSpace from "../Shared/Layout/AJCFSpace";
import { colors } from "../../assets/css/variables/colors";
import { EspaceId } from "../../assets/poles/constants";
import { ImageSharpFluid } from "../../generated/types";

export interface EspaceProps {
  imageSource?: ImageSharpFluid;
  description: string;
  to: string;
  espaceId: EspaceId;
  backgroundColor: string;
}

interface EspacesSectionProps {
  espaceImages: ImageSharpFluid[];
}

const espaceSectionStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.alternateBgColor,
};

export const EspacesSection = ({ espaceImages }: EspacesSectionProps) => {
  const areas: EspaceProps[] = [
    {
      imageSource: espaceImages.find((img) => img.src.includes("talk")),
      description: "Comprendre et défendre l'identité franco-chinoise",
      to: "/talk",
      espaceId: "talk",
      backgroundColor: colors.colorTalk,
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("learn")),
      description: "Se développer et explorer de nouveaux horizons",
      to: "/learn",
      espaceId: "learn",
      backgroundColor: colors.colorLearn,
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("meet")),
      description: "Connaître et intégrer le réseau franco-chinois",
      to: "/meet",
      espaceId: "meet",
      backgroundColor: colors.colorMeet,
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("enjoy")),
      description: "Apprendre en s'amusant et se dépasser",
      to: "/enjoy",
      espaceId: "enjoy",
      backgroundColor: colors.colorEnjoy,
    },
  ];
  return (
    <section id="areas" style={espaceSectionStyle}>
      <div className="section-title">
        <h1>Les Espaces AJCF</h1>
      </div>
      <div className="text-content">
        <p>Les différents projets de l'AJCF sont répartis au sein de quatre espaces thématiques :</p>
      </div>
      <AJCFSpace height={1} />
      {areas.map((area) => (
        <Espace key={area.espaceId} {...area} />
      ))}
    </section>
  );
};
