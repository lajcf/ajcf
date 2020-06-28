// import { SemanticICONS } from "semantic-ui-react";
const c = {
  MODIFY_UI: "modifyUI",
  RESPONSIVE_TABLET_BREAKPOINT: 1200,
  RESPONSIVE_MOBILE_BREAKPOINT: 768,
};

const hoursSecondsEquivalent = {
  TWELVE: 43200,
};

const localeConstants = {
  FRENCH_LOCALES: ["fr-FR", "fr-BE", "fr-CA", "fr-LU", "fr-MC", "fr-CH", "fr"],
  ENGLISH_LOCALES: [
    "en-US",
    "en-EG",
    "en-AU",
    "en-GB",
    "en-CA",
    "en-NZ",
    "en-IE",
    "en-ZA",
    "en-JM",
    "en-BZ",
    "en-TT",
    "en",
  ],
  SUPPORTED_LOCALES: ["fr", "en"] as const,
  DEFAULT_LOCALE: "fr" as const,
};

export type SupportedLocales = typeof localeConstants["SUPPORTED_LOCALES"][number];

export { c as default, hoursSecondsEquivalent, localeConstants };
