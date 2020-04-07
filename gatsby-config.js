module.exports = {
  siteMetadata: {
    title: `RENCI's COVID-19 Response`,
    description: `RENCI's COVID-19 Response`,
    author: `mbwatson`,
    menuItems:[
      { text: 'Home', path: '/', },
      { text: 'Our Work', path: '/work/', },
      { text: 'Resources', path: '/resources/', },
      { text: 'Contact', path: '/contact/', },
    ],
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `renci-covid-19-response`,
        short_name: `renci`,
        start_url: `/`,
        background_color: `#3b75a3`,
        theme_color: `#3b75a3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/covid-19",
}
