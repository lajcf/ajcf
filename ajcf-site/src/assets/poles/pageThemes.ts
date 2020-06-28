import { colors } from "../css/variables/colors";

export type EspacePageTheme = {
  mainColor: string;
  mainColorLight: string;
  secondaryColor: string;
  secondaryColorLight: string;
  secondaryColorLighter: string;
  secondaryColorLightest: string;
};

export const talkTheme: EspacePageTheme = {
  mainColor: colors.colorTalk,
  mainColorLight: colors.colorTalkLight,
  secondaryColor: colors.colorEnjoy,
  secondaryColorLight: colors.colorEnjoyLight,
  secondaryColorLighter: colors.colorEnjoyLighter,
  secondaryColorLightest: colors.colorEnjoyLightest,
};

export const learnTheme: EspacePageTheme = {
  mainColor: colors.colorLearn,
  mainColorLight: colors.colorLearnLight,
  secondaryColor: colors.colorEnjoy,
  secondaryColorLight: colors.colorEnjoyLight,
  secondaryColorLighter: colors.colorEnjoyLighter,
  secondaryColorLightest: colors.colorEnjoyLightest,
};

export const meetTheme: EspacePageTheme = {
  mainColor: colors.colorMeet,
  mainColorLight: colors.colorMeetLight,
  secondaryColor: colors.colorEnjoy,
  secondaryColorLight: colors.colorEnjoyLight,
  secondaryColorLighter: colors.colorEnjoyLighter,
  secondaryColorLightest: colors.colorEnjoyLightest,
};

export const enjoyTheme: EspacePageTheme = {
  mainColor: colors.colorEnjoy,
  mainColorLight: colors.colorEnjoyLight,
  secondaryColor: colors.colorTalkLight,
  secondaryColorLight: colors.colorEnjoyLight,
  secondaryColorLighter: colors.colorEnjoyLighter,
  secondaryColorLightest: colors.colorEnjoyLightest,
};
