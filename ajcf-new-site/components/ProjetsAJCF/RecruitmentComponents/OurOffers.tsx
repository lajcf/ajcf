import React from "react";
import styles from "./Recruitment.module.scss";

type OffersContentProps = {
  id: number;
  category: string;
  description: string;
};

const offersContent: OffersContentProps[] = [
  {
    id: 1,
    category: "Stage/Service Civique 2021",
    description:
      "Recherche stagiaire ou service civique pour missions de communication (newsletters, emailing, community manager) à partir de février 2021.  Stage rémunéré.",
  },
  {
    id: 2,
    category: "Bénévolat",
    description: "Recherche photographe pour nous accompagner sur différents événements extérieurs.",
  },
  {
    id: 3,
    category: "Bénévolat",
    description: "Recherche community manager pour notre compte Twitter.",
  },
  {
    id: 4,
    category: "Bénévolat",
    description: "Recherche graphiste pour nos visuels sur les réseaux sociaux et notre site. ",
  },
  {
    id: 5,
    category: "Stage/Service Civique 2021",
    description:
      "Recherche stagiaire ou service civique pour missions de communication (newsletters, emailing, community manager) à partir de octobre 2020.  Stage rémunéré.",
  },
];

export const OurOffers = () => {
  return (
    <section className={styles.ourOffersSection}>
      <h2>Nos offres du moment</h2>
      <ul className={styles.offersContentList}>
        {offersContent.map((offer) => (
          <li key={offer.id}>
            <div className="capsHeading">{offer.category}</div>
            <p className="texte1">{offer.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
