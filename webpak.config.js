
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    //devtool: debug ? "inline-sourcemap" : null,
    //entry: 'js/index.js',
    entry: 'js/index.es6',
    output: {
        path: __dirname,
        //filename: './js/bundled_es6/bundle.es6'
        filename: 'index.js',
        sourceMapFilename: "./bundle.map"
    },
    devtool: "#source-map",
  module: {
    loaders: [
      {
        //test: /\.js$/,
        //test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.css$/,
        loader: 'style!css!',
        // Options to configure babel with
        //   query: {
        //     plugins: ['transform-runtime'],
        //     presets: ['es2015'],
        //   }
      }
    ]
  }
};
