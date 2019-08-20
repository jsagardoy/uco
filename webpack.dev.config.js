const merge = require("webpack-merge");
const common = require("./webpack.config.js/index.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new Dotenv({
      path: "./dev.env"
    })
  ]
});
