import AJCFTalkLogo from "../../assets/img/AJCFTalkLogo.jpg";
import AJCFLearnLogo from "../../assets/img/AJCFLearnLogo.jpg";
import AJCFMeetLogo from "../../assets/img/AJCFMeetLogo.jpg";
import AJCFEnjoyLogo from "../../assets/img/AJCFEnjoyLogo.jpg";
import React from "react";
import { Area } from "./Area";
import AJCFSpace from "../Layout/AJCFSpace";

export interface AreaProps {
  imageSource: string;
  description: string;
  to: string;
  className: string;
}

const areas: AreaProps[] = [
  {
    imageSource: AJCFTalkLogo,
    description: "Comprendre et défendre l'identité franco-chinoise",
    to: "/areas/talk",
    className: "ajcf-talk",
  },
  {
    imageSource: AJCFLearnLogo,
    description: "Se développer et explorer de nouveaux horizons",
    to: "/areas/learn",
    className: "ajcf-learn",
  },
  {
    imageSource: AJCFMeetLogo,
    description: "Connaître et intégrer le réseau franco-chinois",
    to: "/areas/meet",
    className: "ajcf-meet",
  },
  {
    imageSource: AJCFEnjoyLogo,
    description: "Apprendre en s'amusant et se dépasser",
    to: "/areas/enjoy",
    className: "ajcf-enjoy",
  },
];

export const AreasSection = () => {
  return (
    <section id="areas" className="tiles">
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
