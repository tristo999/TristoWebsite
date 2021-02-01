/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Personal Website for Tristan Fitzwater`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@styles": "src/styles",
          "@sections": "src/components/sections",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/Logo.png`,
      },
    },
  ],
}
