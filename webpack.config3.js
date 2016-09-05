var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require("path");

var rootDir = __dirname;
var jsDir = rootDir + "/js";
var distDir = rootDir + "/dist";

module.exports = {
  context: path.join(__dirname, 'js'),
  entry: {
    index: './js/index.es6'
    //testimonials: './js/testimonials.es6'
  }
  output: {
    path: path.join(__dirname, 'dist'),
    //filename: './js/bundled_es6/bundle.es6'
    //filename: '[name].bundle.js',
    filename: 'bundle.js',
    sourceMapFilename: "./bundle.map"
  },
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
