// import { SemanticICONS } from "semantic-ui-react";
const c = {
  MODIFY_UI: "modifyUI",
/*
  ICON_DOWNLOAD: "cloud download" as SemanticICONS,
  ICON_EDIT: "edit outline" as SemanticICONS,
  ICON_DELETE: "delete" as SemanticICONS,
  ICON_LINK: "angle double right" as SemanticICONS,
  ICON_HIDE: "hide" as SemanticICONS,
*/

  PREVIEW_FILE_SIZE_LIMIT: 5000000, // 5 MB
  PREVIEW_FILE_PAGE_LIMIT: 30,

  TOTAL_MAIL_ATTACHMENT_FILE_SIZE: 6500000,

  FEEDBACK_MESSAGE_ANIMATION_DURATION: 500,
  FEEDBACK_MESSAGE_MESSAGE_DURATION: 3000,

  RESPONSIVE_TABLET_BREAKPOINT: 1200,
  RESPONSIVE_MOBILE_BREAKPOINT: 768,
};

const hoursSecondsEquivalent = {
  TWELVE: 43200,
};

const errorMessageConstants = {
  GOOGLE_PLACES_API_NO_CITY_ERROR: "Google Places API Error: no city",
  GQL_GOOGLE_PLACES_API_NO_CITY_ERROR: "GraphQL error: Google Places API Error: no city",
};

const cookieNamesConstants = {
  DAILY_NEWS_BANNER_COOKIE: "daily-update-news-banner",
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

export { c as default, hoursSecondsEquivalent, errorMessageConstants, cookieNamesConstants, localeConstants };
