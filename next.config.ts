// eslint-disable-next-line @typescript-eslint/no-require-imports
const withImages = require('next-images');
module.exports = {
  webpack(config: { module: { rules: { test: RegExp; use: string[] }[] } }) {
    withImages();
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
