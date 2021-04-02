import React from "react";

const educationPartners = [
  {
    id: 1,
    logo: require("../../../public/Logos Partenaires/Ministère-Éducation-Nationale.png"),
  },
  {
    id: 2,
    logo: require("../../../public/Logos Partenaires/DILCRAH.png"),
  },
  {
    id: 3,
    logo: require("../../../public/Logos Partenaires/Région-Île-de-France.png"),
  },
  {
    id: 4,
    logo: require("../../../public/Logos Partenaires/Ville-de-Paris.png"),
  },
];

export const EducationPartnersLogos = () => {
  return (
    <ul>
      {educationPartners.map((educationPartner) => (
        <li key={educationPartner.id}>
          <img src={educationPartner.logo} />
        </li>
      ))}
    </ul>
  );
};
