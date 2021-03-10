import React from "react";
import { CustomCarousel } from "../../../../lib/utils/CustomCarouselComponents/CustomCarousel";
import styles from "../OurStory.module.scss";

type TestimonyProps = {
  name: string;
  function: string;
  text: string;
};

const testimoniesContent: TestimonyProps[] = [
  {
    name: "Laetitia Chhiv",
    function: "Présidente 2019-2021",
    text: `La multiculturalité est l’un des grands thèmes de ma vie. A l’AJCF, je rencontre des personnes à la fois semblables et différentes, avec qui construire des projets concrets pour promouvoir l’identité franco-chinoise.`,
  },
  {
    name: "Flora Maïno",
    function: "Vice-Présidente 2020-2021",
    text: `Mon aventure au sein de l’AJCF s’est faite par hasard. J’y ai rencontré ma tribu, qui m’a fait grandir et rendu plus forte dans mon acceptation de ma double culture.`,
  },
  {
    name: "Hélène Huang",
    function: "Pôle Chinese Food Day",
    text: `J’ai rejoins l’AJCF en mai 2020, peu de temps après le déconfinement et la fin de mes études. Étant née en France mais d’origine chinoise, j’ai toujours été intéressée à en apprendre plus sur ma culture. Grâce à mes parents, j’ai grandi dans le monde de la restauration et je veux briser les clichés qu’il y a autour de la cuisine chinoise. Il y a tellement à apprendre et je souhaite la partager avec tout le monde autour d’un bon repas !`,
  },
  {
    name: "Thomas Cai",
    function: "Pôle communication",
    text: `L’AJCF crée un espace de partage et d'échange pour explorer nombreuses thématiques sur la représentation des Français d’origine chinoise. J’espère que nous pouvons tous progresser en ce sens. Apprenons ensemble à mieux nous connaître et nous comprendre #ToutLeMondeEnsemble`,
  },
  {
    name: "Thérésa Wong",
    function: "Membre",
    text: `A mes yeux, l'AJCF est un moyen pour la jeunesse française d'origine Chinoise encore peu représentée de s'exprimer et d'être prise en compte, et constitue un symbole fort de cohésion sous une double identité.`,
  },
  {
    name: "Céline Zheng",
    function: "Pôle communication",
    text: `L’AJCF, pour moi, représente un point de repère, là où on y retrouve sa double culture franco-chinoise, là où ensemble nous construisons notre histoire. Ça fait maintenant plus d’un an que j’ai rejoint cette famille et je suis fière de faire partie de cette aventure !`,
  },
];

const TestimonyCard = ({ testimony }: { testimony: TestimonyProps }) => {
  return (
    <div className={styles.testimonyCard}>
      <blockquote>{testimony.text}</blockquote>
      <ul>
        <li>{testimony.name}</li>
        <li>{testimony.function}</li>
      </ul>
    </div>
  );
};

export const TestimoniesContainer = () => {
  return (
    <section className={styles.testimoniesSection}>
      <h2>Paroles de membres</h2>
      <CustomCarousel autoplay>
        {testimoniesContent.map((testimony) => (
          <TestimonyCard key={testimony.name} testimony={testimony} />
        ))}
      </CustomCarousel>
    </section>
  );
};
