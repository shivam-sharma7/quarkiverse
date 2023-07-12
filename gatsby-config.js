/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // remove or update this once the URL is finalised and we add a cname
  pathPrefix: `/quarkiverse`,
  siteMetadata: {
    title: `Quarkiverse Hub`,
    description: `The Quarkiverse Hub provides support for Quarkus extension projects contributed by the community.`,
    author: `@quarkusio`,
    siteUrl: `https://quarkiverse.io/quarkiverse`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/docs`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-frontmatter-defaults",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/quarkiverse-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}