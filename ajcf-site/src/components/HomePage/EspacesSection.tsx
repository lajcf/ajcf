import React from "react";
import { Area } from "./Area";
import AJCFSpace from "../Layout/AJCFSpace";
import { ImageSharpFluid } from "../../../gatsby-graphql";
import { colors } from "../../assets/css/variables/colors";

export interface EspaceProps {
  imageSource?: ImageSharpFluid;
  description: string;
  to: string;
  className: string;
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
      className: "ajcf-talk",
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("learn")),
      description: "Se développer et explorer de nouveaux horizons",
      to: "/learn",
      className: "ajcf-learn",
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("meet")),
      description: "Connaître et intégrer le réseau franco-chinois",
      to: "/meet",
      className: "ajcf-meet",
    },
    {
      imageSource: espaceImages.find((img) => img.src.includes("enjoy")),
      description: "Apprendre en s'amusant et se dépasser",
      to: "/enjoy",
      className: "ajcf-enjoy",
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
        <Area key={area.className} className={area.className} {...area} />
      ))}
    </section>
  );
};
