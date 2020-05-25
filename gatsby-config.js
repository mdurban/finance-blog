module.exports = {
  siteMetadata: {
    title: `Money For Noobs`,
    description: `Finance for noobs, by noobs`,
    author: `themoneynoob@moneyfornoobs.com`,
    siteUrl: 'https://www.moneyfornoobs.com',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blogPosts`,
        name: "blog-posts",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145304482-1",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Roboto Serif', 'Lato Serif']
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    }
  ],
}
