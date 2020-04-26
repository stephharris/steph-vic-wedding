const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

// module.exports = withCSS(withImages({}))


module.exports = withPlugins(
  [
    withImages,
    withCSS,
  ],
  {
    env: {
      SECRET: process.env.SECRET
    }
  },
);
