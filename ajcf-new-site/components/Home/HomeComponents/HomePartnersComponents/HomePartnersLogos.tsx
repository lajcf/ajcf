import React from "react";
import styles from "./HomePartners.module.scss";
import { AJCFImage } from "../../../../lib/utils/AJCFImage";

export const partnersLogos = [
  {
    id: 1,
    name: "Minitère-Éducation-Nationale",
    file: require("../../../../public/Logos Partenaires/Ministère-Éducation-Nationale.png"),
  },
  {
    id: 2,
    name: "Ville-de-Paris",
    file: require("../../../../public/Logos Partenaires/Ville-de-Paris.png"),
  },
  {
    id: 3,
    name: "Région-Île-de-France",
    file: require("../../../../public/Logos Partenaires/Région-Île-de-France.png"),
  },
  {
    id: 4,
    name: "Mairie-13eme",
    file: require("../../../../public/Logos Partenaires/Mairie-13eme.png"),
  },
  {
    id: 5,
    name: "mvac-13",
    file: require("../../../../public/Logos Partenaires/mvac-13.png"),
  },
  {
    id: 6,
    name: "Defenseur des Droits",
    file: require("../../../../public/Logos Partenaires/Defenseur des Droits.png"),
  },
  {
    id: 7,
    name: "DILCRAH",
    file: require("../../../../public/Logos Partenaires/DILCRAH.png"),
  },
  {
    id: 8,
    name: "Licra",
    file: require("../../../../public/Logos Partenaires/Licra.png"),
  },
  {
    id: 9,
    name: "SOS-Racisme",
    file: require("../../../../public/Logos Partenaires/SOS-Racisme.png"),
  },
  {
    id: 10,
    name: "Respect Zone",
    file: require("../../../../public/Logos Partenaires/Respect Zone.png"),
  },
  {
    id: 11,
    name: "Sécurité-pour-tous",
    file: require("../../../../public/Logos Partenaires/Sécurité-pour-tous.png"),
  },
  {
    id: 12,
    name: "MRAP",
    file: require("../../../../public/Logos Partenaires/MRAP.png"),
  },
  {
    id: 13,
    name: "AALOCF",
    file: require("../../../../public/Logos Partenaires/AALOCF.png"),
  },
  {
    id: 14,
    name: "CFFC",
    file: require("../../../../public/Logos Partenaires/CFFC.png"),
  },
  {
    id: 15,
    name: "FAFC",
    file: require("../../../../public/Logos Partenaires/FAFC.png"),
  },
  {
    id: 16,
    name: "APHG",
    file: require("../../../../public/Logos Partenaires/APHG.png"),
  },
  {
    id: 17,
    name: "AFPC",
    file: require("../../../../public/Logos Partenaires/AFPC.png"),
  },
  {
    id: 18,
    name: "Wujianmin",
    file: require("../../../../public/Logos Partenaires/Wujianmin.png"),
  },
  {
    id: 19,
    name: "Entreprises-13",
    file: require("../../../../public/Logos Partenaires/Entreprises-13.png"),
  },
  {
    id: 20,
    name: "Amicale-Teochew",
    file: require("../../../../public/Logos Partenaires/Amicale-Teochew.png"),
  },
  {
    id: 21,
    name: "Paris-Store",
    file: require("../../../../public/Logos Partenaires/Paris-Store.png"),
  },
  {
    id: 22,
    name: "Moutai",
    file: require("../../../../public/Logos Partenaires/Moutai.png"),
  },
  {
    id: 23,
    name: "Infinitea",
    file: require("../../../../public/Logos Partenaires/Infinitea.png"),
  },
  {
    id: 24,
    name: "Mandarin TV",
    file: require("../../../../public/Logos Partenaires/Mandarin TV.png"),
  },
  {
    id: 25,
    name: "Chine-Info",
    file: require("../../../../public/Logos Partenaires/Chine-Info.png"),
  },
];
export const HomePartnersLogos = () => {
  return (
    <ul className={styles.partnersLogos}>
      {partnersLogos.map((partner) => (
        <li key={partner.name}>
          <AJCFImage src={partner.file} />
        </li>
      ))}
    </ul>
  );
};
