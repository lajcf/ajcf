/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
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
  ],
}
