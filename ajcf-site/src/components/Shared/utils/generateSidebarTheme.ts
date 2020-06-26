import { learnPoles, learnPageFrenchTitle, learnPageChineseTitle } from "./../../../assets/poles/learnPoles";
import { learnTheme, meetTheme, enjoyTheme } from "./../../../assets/poles/pageThemes";
import { EspacePageTheme, PoleProps } from "./../../../pages/talk";
import { PoleId, EspaceId } from "../../../assets/poles/constants";
import { talkTheme } from "../../../assets/poles/pageThemes";
import { talkPoles, talkPageFrenchTitle, talkPageChineseTitle } from "../../../assets/poles/talkPoles";
import { meetPoles, meetPageFrenchTitle, meetPageChineseTitle } from "../../../assets/poles/meetPoles";
import { enjoyPoles, enjoyPageFrenchTitle, enjoyPageChineseTitle } from "../../../assets/poles/enjoyPoles";

export type SidebarTheme = {
  sectionName: EspaceId;
  pageTheme: EspacePageTheme;
  poles: PoleProps[];
  pageFrenchTitle: string;
  pageChineseTitle: string;
};

export const generateSidebarTheme = (poleId?: PoleId | null): SidebarTheme => {
  switch (poleId) {
    case "conferences":
    case "memoire":
    case "ddd":
      return {
        sectionName: "talk",
        pageTheme: talkTheme,
        poles: talkPoles,
        pageFrenchTitle: talkPageFrenchTitle,
        pageChineseTitle: talkPageChineseTitle,
      };
    case "dev-perso":
    case "echange-linguistique":
      return {
        sectionName: "learn",
        pageTheme: learnTheme,
        poles: learnPoles,
        pageFrenchTitle: learnPageFrenchTitle,
        pageChineseTitle: learnPageChineseTitle,
      };
    case "club-pro":
    case "rencontre-mensuelle":
      return {
        sectionName: "meet",
        pageTheme: meetTheme,
        poles: meetPoles,
        pageFrenchTitle: meetPageFrenchTitle,
        pageChineseTitle: meetPageChineseTitle,
      };
    case "cfd":
    case "sports-sorties":
      return {
        sectionName: "enjoy",
        pageTheme: enjoyTheme,
        poles: enjoyPoles,
        pageFrenchTitle: enjoyPageFrenchTitle,
        pageChineseTitle: enjoyPageChineseTitle,
      };
    default:
      return {
        sectionName: "talk",
        pageTheme: talkTheme,
        poles: talkPoles,
        pageFrenchTitle: talkPageFrenchTitle,
        pageChineseTitle: talkPageChineseTitle,
      };
  }
};
