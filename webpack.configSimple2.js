
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './js/index.es6',
    output: {
        path: __dirname,
        //filename: './js/bundled_es6/bundle.es6'
        filename: './js/index.js',
        sourceMapFilename: "./bundle.map"
    },
    devtool: "#source-map",
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.css$/,
        loader: 'style!css!',
      }
    ]
  }
};
