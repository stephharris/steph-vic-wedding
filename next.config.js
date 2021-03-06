const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')


module.exports = withPlugins(
  [
    withImages,
  ],
  {
    env: {
      SECRET: process.env.SECRET
    }
  },
);
