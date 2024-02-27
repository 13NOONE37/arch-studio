/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `arch-studio`,
    siteUrl: `https://13noone37.github.io/arch-studio/`,
    description: `Welcome to Arch Studio. We have a unique network and skillset to help bring your projects to life. `,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arch Studio`,
        short_name: `Arch`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1B1D23`,
        icon: 'src/assets/favicon.png',
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
