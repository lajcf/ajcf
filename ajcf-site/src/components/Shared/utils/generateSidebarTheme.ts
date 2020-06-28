import { EspaceId, PoleProps } from "../../../assets/poles/constants";
import { learnTheme, meetTheme, enjoyTheme, talkTheme } from "../../../assets/poles/pageThemes";
import { EspacePageTheme } from "../../../pages/talk";

export type SidebarTheme = {
  sectionName: EspaceId;
  pageTheme: EspacePageTheme;
  poles: PoleProps[];
  pageFrenchTitle: string;
  pageChineseTitle: string;
};

export const generateSidebarTheme = (espaceId?: EspaceId | null): EspacePageTheme => {
  switch (espaceId) {
    case "talk":
      return talkTheme;
    case "learn":
      return learnTheme;
    case "meet":
      return meetTheme;
    case "enjoy":
      return enjoyTheme;
    default:
      throw new Error(`Unknown Espace ${espaceId}`);
  }
};
