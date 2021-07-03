/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  target: "serverless",
  optimizeImagesInDev: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["media.graphcms.com"],
  },
};
