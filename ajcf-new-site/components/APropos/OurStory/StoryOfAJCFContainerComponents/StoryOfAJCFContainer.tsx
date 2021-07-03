import React from "react";
import styles from "../OurStory.module.scss";
import histoireDeLAjcf from "../../../../public/Images/About us/aboutus_histoire-de-lajcf.jpg";
import projetAssociatif from "../../../../public/Images/About us/aboutus_projet-associatif.jpg";
import lieuDePartage from "../../../../public/Images/About us/aboutus_lieu-de-partage.jpg";
import { AJCFImage } from "../../../../lib/utils/AJCFImage";

const storyOfAJCFContent = [
  {
    title: `L'histoire de l'AJCF`,
    image: histoireDeLAjcf,
    paragraphs: [
      `L’AJCF est avant tout une histoire, celle d’une jeunesse issue de cette France nouvelle : diversité culturelle, engagement citoyen, échanges libres sur les réseaux sociaux.`,
      `Née en 2009, l’association est issue de la réunion d’un groupe d’amis qui partageaient un idéal commun : créer un espace indépendant et ouvert aux personnes intéressées par la culture chinoise, l’histoire de l’immigration chinoise en France, ou encore toute question d’actualité en rapport avec cette communauté.`,
      `Dans ce cadre unique, l’AJCF a progressivement pris forme au travers d’interventions médiatiques, de ses activités, ses conférences, ainsi que ses partenariats publics et associatifs.`,
    ],
  },
  {
    title: `Un projet associatif`,
    image: projetAssociatif,
    paragraphs: [
      `Centrée au départ sur la constitution d’un réseau d’entraide et la lutte contre le racisme, les activités de l’AJCF se sont diversifiées au fil des années.`,
      `Aujourd’hui, l’association organise des débats et des conférences autour de thèmes en rapport avec la communauté chinoise de France et les interactions franco-chinoises, des séances d’échange linguistique franco-chinois, des ateliers de développement individuel, mais aussi des dîners destinés à faire découvrir la richesse de la gastronomie chinoise.`,
      `L’AJCF est naturellement très impliquée sur le plan social, à travers sa contribution à des projets culturels qui visent à faire connaître l’histoire de l’immigration chinoise, notamment par le biais de projections et d’interventions dans les établissements scolaires. Enfin, l’association soutient aussi des projets artistiques aidant à améliorer la représentation esthétique des Asiatiques en France.`,
    ],
  },
  {
    title: `Un lieu de partage privilégié`,
    image: lieuDePartage,
    paragraphs: [
      `Au sein de l’AJCF converge une diversité d’hommes et de femmes issus de tous horizons et de toutes origines : journalistes, sociologues, historiens, chercheurs, employés, artisans, entrepreneurs, étudiants, amoureux de la Chine etc.`,
      `Son évolution a montré que ses membres et amis ne se retrouvaient pas à travers un lieu de naissance ou des origines communes, mais à travers des valeurs, des histoires, des aspirations, des vécus, des déceptions ou des succès partagés dans un cadre ouvert, ayant pour toile de fond une meilleure compréhension de l’immigration chinoise en France, de la culture chinoise et de la Chine contemporaine.`,
    ],
  },
];
const ShowParagraphs = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <div className={styles.paragraphsContainer}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
};

const oddOrEvenSection = (index: number) => {
  return (index + 1) % 2 ? styles.oddParagraphSection : styles.evenParagraphSection;
};

export const StoryOfAJCFContainer = () => {
  return (
    <section className={styles.storyOfAJCFSection}>
      {storyOfAJCFContent.map((section, index) => (
        <section key={section.title} className={`${styles.paragraphSection} ${oddOrEvenSection(index)}`}>
          <h2>{section.title}</h2>
          <AJCFImage src={section.image} />
          <ShowParagraphs paragraphs={section.paragraphs} />
        </section>
      ))}
    </section>
  );
};
