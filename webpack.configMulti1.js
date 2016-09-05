var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require("path");
var CommonsChunkPlugin = require("./../lib/optimize/CommonsChunkPlugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //var webpackConfig = {
  //context: __dirname,
  entry: {
    index: './js/index.es6',
    testimonialsIndex: './js/testimonialsIndex.es6'
  },
  output: {
    path: "./", //path.join(__dirname, "js"),
    //filename: './js/bundled_es6/bundle.es6'
    //filename: './js/index.js',
    filename: "[name].js", //"[name].bundle.js",
    //chunkFilename: "[id].chunk.js",
    sourceMapFilename: "./bundle.map"
  },
  plugins: [
    new CommonsChunkPlugin({
      filename: "common.js",
      name: "common"
    })
  ],
  /*HtmlWebpackPlugin*/
  // entry: './js/index.es6',
  // output: {
  //   path: 'dist',
  //   filename: 'index_bundle.js'
  // },
  // plugins: [
  //   new HtmlWebpackPlugin()
  // ],
  devtool: "#source-map",
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.css$/,
      loader: 'style!css!',
    }]
  }
};
