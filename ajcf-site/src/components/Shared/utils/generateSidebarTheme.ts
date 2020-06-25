import { learnPoles, learnPageFrenchTitle, learnPageChineseTitle } from "./../../../assets/poles/learnPoles";
import { learnTheme } from "./../../../assets/poles/pageThemes";
import { EspacePageTheme, PoleProps } from "./../../../pages/talk";
import { PoleId, EspaceId } from "../../../assets/poles/constants";
import { talkTheme } from "../../../assets/poles/pageThemes";
import { talkPoles, talkPageFrenchTitle, talkPageChineseTitle } from "../../../assets/poles/talkPoles";

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
