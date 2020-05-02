import AJCFTalkLogo from "../../assets/img/AJCFTalkLogo.png";
import AJCFLearnLogo from "../../assets/img/AJCFLearnLogo.png";
import AJCFMeetLogo from "../../assets/img/AJCFMeetLogo.png";
import AJCFEnjoyLogo from "../../assets/img/AJCFEnjoyLogo.png";
import React from "react";
import { Area } from "./Area";

export interface AreaProps {
  imageSource: string;
  heading: string;
  description: string;
  to: string;
}

const areas: AreaProps[] = [
  {
    imageSource: AJCFTalkLogo,
    heading: "",
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/talk",
  },
  {
    imageSource: AJCFLearnLogo,
    heading: "",
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/learn",
  },
  {
    imageSource: AJCFMeetLogo,
    heading: "",
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/meet",
  },
  {
    imageSource: AJCFEnjoyLogo,
    heading: "",
    description:
      "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
    to: "/areas/enjoy",
  },
];

export const AreasSection = () => {
  return (
    <section id="areas" className="tiles">
      {areas.map((area) => (
        <Area key={area.heading} {...area} />
      ))}
    </section>
  );
};
