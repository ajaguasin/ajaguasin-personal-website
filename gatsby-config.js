module.exports = {
  siteMetadata: {
    title: `< A.J. Aguasin />`,
    description: `A.J. Aguasin's personal website.`,
    author: `A.J. Aguasin`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-material-ui`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url:
          "https://api-uswest.graphcms.com/v1/cjs55yanw3ox701gfa0c8pbev/master"
      }
    }
  ]
};
