module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'SWAPI',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'swapi',
        // Url to query from
        url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
    },
  ],
}
