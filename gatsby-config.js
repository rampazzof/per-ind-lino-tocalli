module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        title: "Per. Ind. Lino Tocalli",
        name: "Per. Ind. Lino Tocalli",
        short_name: "PerIndLT",
        start_url: "/",
        icon: "static/favicon.ico",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
