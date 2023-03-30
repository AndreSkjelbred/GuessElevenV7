const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  resolve: {
    // ... other resolve options ...
    alias: {
      // ... other aliases ...
      "https://cdn.skypack.dev/canvas-confetti": "canvas-confetti",
    },
  },
};
