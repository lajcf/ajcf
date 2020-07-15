import { BLOCKS } from "@contentful/rich-text-types";
import * as path from "path";
import moment from "moment";
import "moment/locale/fr";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

moment.locale("fr");

export const pathPrefix = `/`; // This path is subpath of your hosting https://domain/portfolio
export const siteMetadata = {
  title: "Association des Jeunes Chinois de France",
};
export const plugins = [
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      // jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  `gatsby-plugin-emotion`,
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Association des Jeunes Chinois de France",
      short_name: "AJCF",
      start_url: "/",
      background_color: "#ba2d1d",
      theme_color: "#ba2d1d",
      display: "standalone",
      icon: "src/assets/img/website-icon.png", // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: require("sass"),
    },
  },
  "gatsby-plugin-offline",
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DRAFT_ACCESS_TOKEN,
      host: "preview.contentful.com",
    },
  },
  {
    resolve: `@contentful/gatsby-transformer-contentful-richtext`,
    options: {
      renderOptions: {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return `<img src="${node.data.target.fields.file["en-US"].url}" />`;
          },
        },
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src/assets/img`),
    },
  },
  `gatsby-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
];
