//
//
// File name : webpack.config.js
// Author: Jerry Hsieh @ 2018-07-05
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
