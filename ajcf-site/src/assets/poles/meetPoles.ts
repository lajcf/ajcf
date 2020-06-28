import { PoleProps } from "./constants";

export const meetPageFrenchTitle = "Connexion";
export const meetPageChineseTitle = "交流";
export const clubProPole: PoleProps = {
  to: "/meet/club-pro",
  className: "pole-cover",
  id: "club-pro",
  title: "Club Pro",
  description:
    "En plus de diffuser des offres d’emploi, ce jeune pôle organise des rencontres professionnelles (les AJCF Meetup) autour d’experts du secteur et de thématiques sur la réalité du marché franco-chinois.",
};
export const rencontreMensuellePole: PoleProps = {
  to: "/meet/rencontre-mensuelle",
  className: "pole-cover",
  id: "rencontre-mensuelle",
  title: "Rencontre mensuelle",
  description:
    "Toutes les deux semaines, l’AJCF met en place un échange entre sinophones et francophones souhaitant apprendre ou pratiquer la langue de leur partenaire linguistique.",
};
export const meetPoles: PoleProps[] = [clubProPole, rencontreMensuellePole];
