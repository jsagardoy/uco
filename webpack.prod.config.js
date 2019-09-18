const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new Dotenv({
     // path:"./prod.env",
    }),
  ],
});
