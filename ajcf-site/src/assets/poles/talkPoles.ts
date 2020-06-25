import { PoleProps } from "./../../pages/talk";
import ConferencesCover from "../img/covers/cover-conferences.jpg";
import MemoryCover from "../img/covers/cover-memoire.jpg";
import RightsCover from "../img/covers/cover-ddd.jpg";

export const talkPageFrenchTitle = "Identité";
export const talkPageChineseTitle = "探讨";
export const conferencesPole: PoleProps = {
  imageSource: ConferencesCover,
  to: "/talk/conferences",
  className: "pole-cover",
  id: "conferences",
  title: "Conférences & Débats",
  description:
    "Le pôle “Conférences-débats” explore des thématiques en rapport à l’histoire commune et le profil culturel des Français d’origine chinoise. Des sujets touchant à la culture chinoise et l’actualité de la Chine contemporaine y sont également discutés. Ce lieu d’échange permet ainsi aux membres de l’association de partager leurs réflexions, leurs vécus et leurs ressentis, autour de questions qui les touchent directement.",
};
export const memoirePole: PoleProps = {
  imageSource: MemoryCover,
  to: "/talk/memoire",
  className: "pole-cover",
  id: "memoire",
  title: "Mémoire",
  description:
    "L’AJCF intervient en milieu scolaire à travers des projections-débats qui s’appuient sur le film de Karim HOUFAID, Les travailleurs chinois de la Grande Guerre (14-18).",
};
export const dddPole: PoleProps = {
  imageSource: RightsCover,
  to: "/talk/ddd",
  className: "pole-cover",
  id: "ddd",
  title: "Défense des Droits",
  description:
    "L’équipe a pour mission de venir en aide à la population asiatique victime de racisme, d’avancer dans les démarches avec les pouvoirs publics et de communiquer sur notre site et  auprès des médias.",
};
export const talkPoles: PoleProps[] = [conferencesPole, memoirePole, dddPole];
