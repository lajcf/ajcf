import { PoleProps } from "./constants";

export const learnPageFrenchTitle = "Découverte";
export const learnPageChineseTitle = "体会";
export const devPersoPole: PoleProps = {
  to: "/learn/dev-perso",
  className: "pole-cover",
  id: "dev-perso",
  title: "Développement personnel",
  description:
    "La participation à des ateliers (impro, théâtre, prise de parole, …) permet aux membres de l’association de s’épanouir et de se réaliser dans une meilleure connaissance de soi.",
};
export const echangeLinguistiquePole: PoleProps = {
  to: "/learn/echange-linguistique",
  className: "pole-cover",
  id: "echange-linguistique",
  title: "Echange linguistique",
  description:
    "Toutes les deux semaines, l’AJCF met en place un échange entre sinophones et francophones souhaitant apprendre ou pratiquer la langue de leur partenaire linguistique.",
};
export const learnPoles: PoleProps[] = [devPersoPole, echangeLinguistiquePole];
