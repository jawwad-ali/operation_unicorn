// const dotenv = require("dotenv");
// dotenv.config();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Pacifico`,
          `Helvetica`,
          `Arial`,
          `sans-serif `,
          `Roboto`,    // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}