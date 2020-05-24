import ConferencesCover from "../img/covers/cover-conferences.jpg";
import MemoryCover from "../img/covers/cover-memoire.jpg";
import RightsCover from "../img/covers/cover-ddd.jpg";
import { PoleProps } from "../../pages/talk";

export const talkPageFrenchTitle = "Identité";
export const talkPageChineseTitle = "探讨";
export const talkPoles: PoleProps[] = [
  {
    imageSource: ConferencesCover,
    to: "/talk/conferences",
    className: "pole-cover",
    id: "conferences",
    title: "Conférences & Débats",
    description:
      "Le pôle “Conférences-débats” explore des thématiques en rapport à l’histoire commune et le profil culturel des Français d’origine chinoise. Des sujets touchant à la culture chinoise et l’actualité de la Chine contemporaine y sont également discutés. Ce lieu d’échange permet ainsi aux membres de l’association de partager leurs réflexions, leurs vécus et leurs ressentis, autour de questions qui les touchent directement.",
  },
  {
    imageSource: MemoryCover,
    to: "/talk/memoire",
    className: "pole-cover",
    id: "memoire",
    title: "Mémoire",
    description:
      "L’AJCF intervient en milieu scolaire à travers des projections-débats qui s’appuient sur le film de Karim HOUFAID, Les travailleurs chinois de la Grande Guerre (14-18).",
  },
  {
    imageSource: RightsCover,
    to: "/talk/ddd",
    className: "pole-cover",
    id: "ddd",
    title: "Défense des Droits",
    description:
      "L’AJCF intervient en milieu scolaire à travers des projections-débats qui s’appuient sur le film de Karim HOUFAID, Les travailleurs chinois de la Grande Guerre (14-18).",
  },
];
