var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  /** MULTIPLE ENTRY
    Make entry an object with key value pairs.
    And the output will have the [name] array**/
  context: path.join(__dirname, './js'),
  entry: {
    app: './index.es6',
    testimonialsIndex: './testimonialsIndex.es6',
    previousNewsIndex: './previousNewsIndex.es6'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
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

  // module: {
  //   loaders: [{
  //     test: /\.(js|es6)$/,
  //     loader: 'babel-loader',
  //     include: path.join(__dirname, 'js'),
  //     exclude: /node_modules/
  //   }, {
  //     test: /\.css$/,
  //     loader: 'style!css!',
  //     include: path.join(__dirname, 'css')
  //   }]
  // }

};
