var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  //context: __dirname,
  entry: path.join(__dirname, 'js', 'index.es6'),

  output: {
    path: path.join(__dirname, 'js'),
    filename: 'index.js',
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
