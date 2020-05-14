import AJCFTalkLogo from "../../assets/img/AJCFTalkLogo.jpg";
import AJCFLearnLogo from "../../assets/img/AJCFLearnLogo.jpg";
import AJCFMeetLogo from "../../assets/img/AJCFMeetLogo.jpg";
import AJCFEnjoyLogo from "../../assets/img/AJCFEnjoyLogo.jpg";
import React from "react";
import { Area } from "./Area";

export interface AreaProps {
  imageSource: string;
  description: string;
  to: string;
  className: string;
}

const areas: AreaProps[] = [
  {
    imageSource: AJCFTalkLogo,
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/talk",
    className: "ajcf-talk",
  },
  {
    imageSource: AJCFLearnLogo,
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/learn",
    className: "ajcf-learn",
  },
  {
    imageSource: AJCFMeetLogo,
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/meet",
    className: "ajcf-meet",
  },
  {
    imageSource: AJCFEnjoyLogo,
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
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
      {areas.map((area) => (
        <Area key={area.className} className={area.className} {...area} />
      ))}
    </section>
  );
};
