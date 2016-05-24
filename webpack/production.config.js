var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin-webpack-2');
var autoprefixer = require('autoprefixer');
var precss      = require('precss');

var node_modules_dir = path.resolve(__dirname, 'node_modules');
var settings = require('../settings.js');
var root = path.resolve(__dirname, '../');

var config = {
  entry: path.resolve(root, settings.entryFile),
  output: {
    path: path.resolve(root, settings.productionDir),
    filename: settings.outputFile
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['require', 'export', '$super']
      },
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    }),
    new CompressionPlugin({
      asset: "[file].gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {compact: true}
    },
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules!postcss-loader")}
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  node: {
    fs: "empty"
  }
};

module.exports = config;
