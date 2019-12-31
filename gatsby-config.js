/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Twin Web Development",
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'twinwebdev.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
