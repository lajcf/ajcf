import React from "react";
import { AJCFImage } from "../../../lib/utils/AJCFImage";
import ministereEducationNationale from "../../../public/Logos Partenaires/Ministère-Éducation-Nationale.png";
import dilcrah from "../../../public/Logos Partenaires/DILCRAH.png";
import idf from "../../../public/Logos Partenaires/Région-Île-de-France.png";
import villeDeParis from "../../../public/Logos Partenaires/Ville-de-Paris.png";

const educationPartners = [
  {
    id: 1,
    logo: ministereEducationNationale,
  },
  {
    id: 2,
    logo: dilcrah,
  },
  {
    id: 3,
    logo: idf,
  },
  {
    id: 4,
    logo: villeDeParis,
  },
];

export const EducationPartnersLogos = () => {
  return (
    <ul>
      {educationPartners.map((educationPartner) => (
        <li key={educationPartner.id}>
          <AJCFImage src={educationPartner.logo} />
        </li>
      ))}
    </ul>
  );
};
