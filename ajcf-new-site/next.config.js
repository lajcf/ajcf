/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  target: "serverless",
  optimizeImagesInDev: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
