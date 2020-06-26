import { EspaceId } from "./../../../assets/poles/constants";
import { PoleId } from "../../../assets/poles/constants";

export const findEspaceFromPole = (poleId?: string | null): EspaceId => {
  switch (poleId) {
    case "conferences":
    case "memoire":
    case "ddd":
      return "talk";
    case "dev-perso":
    case "echange-linguistique":
      return "learn";
    case "club-pro":
    case "rencontre-mensuelle":
      return "meet";
    case "sports-sorties":
    case "cfd":
      return "enjoy";
    default:
      throw new Error(`Pole ${poleId} is unknown or missing.`);
  }
};
