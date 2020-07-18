import React from "react";
import { Bureau } from "./Bureau";
import AJCFSpace from "../Shared/Layout/AJCFSpace";

const style: React.CSSProperties = {
  backgroundColor: "#F7F9F9",
};

export const AboutSection = () => {
  return (
    <section id="about" style={style}>
      <div className="text-content">
        <div className="section-title">
          <h1>À propos</h1>
        </div>
        <h1>Qui sommes-nous ?</h1>
        <p>
          Créée en 2009, l’Association des jeunes chinois de France (AJCF) est une association à but non lucratif (loi
          du 1er juillet 1901) qui a pour objet de :
          <br />
          <ul>
            <li>Procurer un espace d’échange et d’expression pour les jeunes citoyens français d’origine chinoise ;</li>
            <li>
              Faciliter l’entraide et la solidarité entre eux, consolider leur identité, favoriser leur épanouissement
              personnel et professionnel, afin d’améliorer leur visibilité au sein de la société multiculturelle
              française ;
            </li>
            <li>
              Permettre à la société française d’approfondir sa connaissance de la culture chinoise et de ses
              représentants en France ;
            </li>
            <li>Lutter contre le racisme anti-asiatique et venir en aide aux victimes.</li>
          </ul>
        </p>
        <h1>L'histoire de l'AJCF</h1>
        <p>
          L’AJCF est avant tout une histoire, celle d’une jeunesse issue de cette France nouvelle : diversité
          culturelle, engagement citoyen, échanges libres sur les réseaux sociaux.
          <AJCFSpace height="1em" />
          Née en 2009, l’association est issue de la réunion d’un groupe d’amis qui partageaient un idéal commun : créer
          un espace indépendant et ouvert aux personnes intéressées par la culture chinoise, l’histoire de l’immigration
          chinoise en France, ou encore toute question d’actualité en rapport avec cette communauté.
          <AJCFSpace height="1em" />
          Dans ce cadre unique, l’AJCF a progressivement pris forme au travers d’interventions médiatiques, de ses
          activités, ses conférences, ainsi que ses partenariats publics et associatifs.
        </p>
        <h1>Un projet associatif</h1>
        <p>
          Centrée au départ sur la constitution d’un réseau d’entraide et la lutte contre le racisme, les activités de
          l’AJCF se sont diversifiées au fil des années.
          <AJCFSpace height="1em" />
          Aujourd’hui, l’association organise des débats et des conférences autour de thèmes en rapport avec la
          communauté chinoise de France et les interactions franco-chinoises, des séances d’échange linguistique
          franco-chinois, des ateliers de développement individuel, mais aussi des dîners destinés à faire découvrir la
          richesse de la gastronomie chinoise.
          <AJCFSpace height="1em" />
          L’AJCF est naturellement très impliquée sur le plan social, à travers sa contribution à des projets culturels
          qui visent à faire connaître l’histoire de l’immigration chinoise, notamment par le biais de projections et
          d’interventions dans les établissements scolaires. Enfin, l’association soutient aussi des projets artistiques
          aidant à améliorer la représentation esthétique des Asiatiques en France.
        </p>
        <h1>Un lieu de partage privilégié</h1>
        <p>
          Au sein de l’AJCF converge une diversité d’hommes et de femmes issus de tous horizons et de toutes origines :
          journalistes, sociologues, historiens, chercheurs, employés, artisans, entrepreneurs, étudiants, amoureux de
          la Chine etc.
          <AJCFSpace height="1em" />
          Son évolution a montré que ses membres et amis ne se retrouvaient pas à travers un lieu de naissance ou des
          origines communes, mais à travers des valeurs, des histoires, des aspirations, des vécus, des déceptions ou
          des succès partagés dans un cadre ouvert, ayant pour toile de fond une meilleure compréhension de
          l’immigration chinoise en France, de la culture chinoise et de la Chine contemporaine.
        </p>
        <Bureau />
      </div>
    </section>
  );
};
