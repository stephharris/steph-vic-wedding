const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    withImages,
  ],
  {
    env: {
      SECRET_CODE: process.env.SECRET_CODE,
      SECRET_VIDEO: process.env.SECRET_VIDEO,
      SECRET_SUCCESS_MSG: process.env.SECRET_SUCCESS_MSG
    }
  },
);
