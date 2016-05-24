var webpack = require('webpack');
var path = require('path');
var root = path.resolve(__dirname, '../');
var settings = require('../settings.js');

module.exports = {
  devServer: {
    historyApiFallback: true,
    //hot: true,
    inline: true,
    progress: true,
    //contentBase: 'sourcecode',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(root, 'sourcecode/index.js')
  ],
  output: {
    path: path.resolve(root, settings.outputDir),
    filename: settings.outputFile,
  },
  module: {
    loaders:[
      {test: /\.css$/, loader: "style-loader!css-loader?modules"},
      { test: /\.js[x]?$/, include: path.resolve(root, 'sourcecode'), exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
    ]
  },
  node: {
    fs: "empty"
  }
};
