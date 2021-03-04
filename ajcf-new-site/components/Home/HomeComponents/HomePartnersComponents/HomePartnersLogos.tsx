import React from "react";
import styles from "./HomePartners.module.scss";

const partnersLogos = [
  {
    name: "AALOCF",
    file: require("../../../../public/Logos Partenaires/AALOCF.png"),
  },
  {
    name: "AFPC",
    file: require("../../../../public/Logos Partenaires/AFPC.png"),
  },
  {
    name: "Amicale-Teochew",
    file: require("../../../../public/Logos Partenaires/Amicale-Teochew.png"),
  },
  {
    name: "APHG",
    file: require("../../../../public/Logos Partenaires/APHG.png"),
  },
  {
    name: "CFFC",
    file: require("../../../../public/Logos Partenaires/CFFC.png"),
  },
  {
    name: "Chine-Info",
    file: require("../../../../public/Logos Partenaires/Chine-Info.png"),
  },
  {
    name: "Defenseur des Droits",
    file: require("../../../../public/Logos Partenaires/Defenseur des Droits.png"),
  },
  {
    name: "DILCRAH",
    file: require("../../../../public/Logos Partenaires/DILCRAH.png"),
  },
  {
    name: "Entreprises-13",
    file: require("../../../../public/Logos Partenaires/Entreprises-13.png"),
  },
  {
    name: "FAFC",
    file: require("../../../../public/Logos Partenaires/FAFC.png"),
  },
  {
    name: "Infinitea",
    file: require("../../../../public/Logos Partenaires/Infinitea.png"),
  },
  {
    name: "Licra",
    file: require("../../../../public/Logos Partenaires/Licra.png"),
  },
  {
    name: "Mairie-13eme",
    file: require("../../../../public/Logos Partenaires/Mairie-13eme.png"),
  },
  {
    name: "Mandarin TV",
    file: require("../../../../public/Logos Partenaires/Mandarin TV.png"),
  },
  {
    name: "Minitère-Éducation-Nationale",
    file: require("../../../../public/Logos Partenaires/Ministère-Éducation-Nationale.png"),
  },
  {
    name: "Moutai",
    file: require("../../../../public/Logos Partenaires/Moutai.png"),
  },
  {
    name: "MRAP",
    file: require("../../../../public/Logos Partenaires/MRAP.png"),
  },
  {
    name: "Paris-Store",
    file: require("../../../../public/Logos Partenaires/Paris-Store.png"),
  },
  {
    name: "Région-Île-de-France",
    file: require("../../../../public/Logos Partenaires/Région-Île-de-France.png"),
  },
  {
    name: "Respect Zone",
    file: require("../../../../public/Logos Partenaires/Respect Zone.png"),
  },
  {
    name: "Sécurité-pour-tous",
    file: require("../../../../public/Logos Partenaires/Sécurité-pour-tous.png"),
  },
  {
    name: "SOS-Racisme",
    file: require("../../../../public/Logos Partenaires/SOS-Racisme.png"),
  },
  {
    name: "Ville-de-Paris",
    file: require("../../../../public/Logos Partenaires/Ville-de-Paris.png"),
  },
  {
    name: "Wujianmin",
    file: require("../../../../public/Logos Partenaires/Wujianmin.png"),
  },
];
export const HomePartnersLogos = () => {
  return (
    <ul className={styles.partnersLogos}>
      {partnersLogos.map((partner) => (
        <li key={partner.name}>
          <img src={partner.file} />
        </li>
      ))}
    </ul>
  );
};
