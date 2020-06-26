import { PoleProps } from "./../../pages/talk";
import CfdCover from "../img/covers/cover-cfd.jpg";
import SportsSortiesCover from "../img/covers/cover-sports-sorties.jpg";

export const enjoyPageFrenchTitle = "Loisir";
export const enjoyPageChineseTitle = "享受";
export const cfdPole: PoleProps = {
  imageSource: CfdCover,
  to: "/enjoy/cfd",
  className: "pole-cover",
  id: "cfd",
  title: "Chinese Food Day",
  description:
    "Jusqu’ici appelé Chinese Food Week, cet événement a changé de format, mais son objectif reste le même : faire découvrir au grand public la diversité et la richesse de la cuisine chinoise.",
};
export const sportsSortiesPole: PoleProps = {
  imageSource: SportsSortiesCover,
  to: "/enjoy/sports-sorties",
  className: "pole-cover",
  id: "sports-sorties",
  title: "Sports & Sorties",
  description:
    "Les activités sportives amènent les jeunes à se dépasser physiquement et mentalement, d’améliorer leur esprit d’équipe, en n’oubliant pas l’essentiel : se faire plaisir !",
};
export const enjoyPoles: PoleProps[] = [cfdPole, sportsSortiesPole];
