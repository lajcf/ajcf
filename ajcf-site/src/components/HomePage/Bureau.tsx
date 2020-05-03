import React from "react";
import laetitiaImage from "../../assets/img/bureau-laetitia.jpg";
import danielImage from "../../assets/img/bureau-daniel.jpg";
import huanyuImage from "../../assets/img/bureau-huanyu.jpg";
import antoineImage from "../../assets/img/bureau-antoine.jpg";
import { BureauMember } from "./BureauMember";
import AJCFGrid from "../Layout/AJCFGrid";

export interface BureauMemberProps {
  imageSource: string;
  name: string;
  role: string;
  id: string;
}

const bureauMembers: BureauMemberProps[] = [
  {
    imageSource: laetitiaImage,
    name: "Laetitia Chhiv",
    role: "Présidente",
    id: "bureau-laetitia",
  },
  {
    imageSource: danielImage,
    name: "Daniel Tran",
    role: "Vice-Président",
    id: "bureau-daniel",
  },
  {
    imageSource: huanyuImage,
    name: "Huanyu Ren",
    role: "Secrétaire Générale",
    id: "bureau-huanyu",
  },
  {
    imageSource: antoineImage,
    name: "Antoine Lam",
    role: "Trésorier",
    id: "bureau-antoine",
  },
];

export const Bureau = () => {
  return (
    <>
      <h1>Le Bureau</h1>
      <AJCFGrid id="bureau">
        {bureauMembers.map((bureauMember) => (
          <BureauMember key={bureauMember.name} {...bureauMember} />
        ))}
      </AJCFGrid>
    </>
  );
};
