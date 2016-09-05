var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require("path");
//var CommonsChunkPlugin = require("./../lib/optimize/CommonsChunkPlugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var jsDir = rootDir + "/js";
var distDir = rootDir + "/dist";

module.exports = {
  //var webpackConfig = {
  //context: __dirname,
  entry: {
    index: jsDir + "/index.es6",
    testimonialsIndex: jsDir + "/testimonialsIndex.es6"
  },
  output: {
    path: jsDir, //path.join(__dirname, "js"),
    //filename: './js/bundled_es6/bundle.es6'
    //filename: './js/index.js',
    filename: "[name].js", //"[name].bundle.js",
    //chunkFilename: "[id].chunk.js",
    sourceMapFilename: "./bundle.map"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'es6'] // resolve file extentions so that we don't have to specify the extention for js and jsx files
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      chunks: ["index", "testimonialsIndex"]
    }),
    new HtmlWebpackPlugin({
      title: 'MainIndex',
      filename: '/index.html', // relative path from "output" directory
      template: rootDir + '/index.html' // source file
    }),
    new HtmlWebpackPlugin({
      title: 'Testimonials',
      filename: '/testimonials.html', // relative path from "output" directory
      template: rootDir + '/testimonials.html' // source file
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
