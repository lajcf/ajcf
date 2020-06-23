import { AreaPageTheme, PoleProps } from "./../../../pages/talk";
import { PoleId, EspaceId } from "./../constants";
import { talkTheme } from "../../../assets/poles/pageThemes";
import { talkPoles, talkPageFrenchTitle, talkPageChineseTitle } from "../../../assets/poles/talkPoles";

export type SidebarTheme = {
  sectionName: EspaceId;
  pageTheme: AreaPageTheme;
  poles: PoleProps[];
  pageFrenchTitle: string;
  pageChineseTitle: string;
};

export const generateSidebarTheme = (poleId?: PoleId): SidebarTheme => {
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
