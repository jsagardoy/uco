const merge = require('webpack-merge');
const common = require('./webpack.config.js/index.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path:'./prod.env',
    }),
  ],
});
