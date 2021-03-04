import React from "react";
import styles from "./HomeEducation.module.scss";

const homeEducationCards = [
  {
    id: 1,
    title: "Interventions scolaires",
    subTitle: (
      <h4>
        En partenariat avec{" "}
        <a href="https://www.education.gouv.fr/" target="_blank" rel="noreferrer noopener">
          le Ministère de l'Éducation
        </a>
      </h4>
    ),
    link: "https://www.education.gouv.fr/",
    content:
      "Le pôle Education réalise des interventions en milieu scolaire pour sensibiliser la jeunesse à l’histoire de l’immigration des Asiatiques, favoriser le dialogue multiculturel et intergénérationnel, et déconstruire les stéréotypes, afin de promouvoir le bien vivre-ensemble.",
    image: require("../../../../public/Images/Accueil/accueil_interventions-scolaires.jpg"),
  },
  {
    id: 2,
    title: "Parcours de Vie",
    subTitle: (
      <h4>
        En partenariat avec{" "}
        <a href="https://sos-racisme.org/" target="_blank" rel="noreferrer noopener">
          SOS Racisme
        </a>
      </h4>
    ),
    link: "https://sos-racisme.org/",
    content: "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.",
    image: require("../../../../public/Images/Accueil/accueil_parcours-de-vie.jpg"),
  },
];

const oddOrEvenCard = (id: number) => {
  return id % 2 ? styles.cardOdd : styles.cardEven;
};

export const HomeEducationCards = () => {
  return (
    <div className={styles.cardsSection}>
      <ul>
        {homeEducationCards.map((card) => (
          <li key={card.id} className={`${styles.card} ${oddOrEvenCard(card.id)}`}>
            <div className={styles.cardImage}>
              <img src={card.image} />
            </div>
            <div className={styles.emptyZone} />
            <div className={styles.cardText}>
              <h3>{card.title}</h3>
              {card.subTitle}
              <p>{card.content}</p>
              <button className={styles.cardButton} type="button">
                En savoir plus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
