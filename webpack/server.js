var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./development.config.js');

new WebpackDevServer(webpack(config), {
  contentBase: "build",
  publicPath: config.output.publicPath,
  hot: true,
  quite: true,
  info: false,
  laze: true,
  progress: true,
  inline: true,
  stats: {
    colors: true,
  },
}).listen(8080, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8080');
  });
