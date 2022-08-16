module.exports = {
  siteMetadata: {
    title: `RENCI COVID-19 Site`,
    description: `RENCI's COVID-19 REsponse`,
    author: `mbwatson`,
    siteUrl: `https://www.covid-19.renci.org`,
    menuItems:[
      { text: 'Home', path: '/', },
      { text: 'Our Work', path: '/work/', },
      { text: 'Resources', path: '/resources/', },
      { text: 'Contact', path: '/contact/', },
    ],

  },
  plugins: [
    "gatsby-plugin-styled-components", 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120639061-3", // The property ID; the tracking code won't be generated without it
        head: true, // Defines where to place the tracking script - `true` in the head and `false` in the body
        anonymize: true, // Setting this parameter is optional
        respectDNT: true, // Setting this parameter is also optional
        // exclude: ["/preview/**", "/do-not-track/me/too/"], // Avoids sending pageview hits from custom paths
        // pageTransitionDelay: 0, // Delays sending pageview hits on route update (in milliseconds)
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID", // Enables Google Optimize using your container Id
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID", // Enables Google Optimize Experiment ID
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID", // Set Variation ID. 0 for original 1,2,3....
        // Any additional optional fields
        // Documented
        //  here: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create
        // and here: https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
        // sampleRate: 5, // Specifies what percentage of users should be tracked. This defaults to 100 (no users are sampled out) but large sites may need to use a lower sample rate to stay within Google Analytics processing limits.
        siteSpeedSampleRate: 10, // This setting determines how often site speed beacons will be sent. By default, 1% of users will be automatically be tracked.
        cookieDomain: "renci.github.io", // Specifies the domain used to store the analytics cookie. Setting this to 'none' sets the cookie without specifying a domain.
      },

    }, 
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