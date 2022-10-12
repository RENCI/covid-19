module.exports = {
  siteMetadata: {
    title: `RENCI COVID-19 Site`,
    description: `RENCI's COVID-19 Response`,
    author: `mbwatson`,
    siteUrl: `https://covid-19.renci.org`,
    menuItems:[
      { text: 'Home', path: '/', },
      { text: 'Our Work', path: '/work/', },
      { text: 'Resources', path: '/resources/', },
      { text: 'Contact', path: '/contact/', },
    ],

  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `renci-covid-19-response`,
        short_name: `renci`,
        start_url: `/`,
        background_color: `#3b75a3`,
        theme_color: `#3b75a3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    }, 
    "gatsby-transformer-remark", 
    `gatsby-transformer-yaml`,
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
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
  ],
  pathPrefix: "/covid-19",
};