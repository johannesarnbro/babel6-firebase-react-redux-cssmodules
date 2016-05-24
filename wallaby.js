var wallabyWebpack = require('wallaby-webpack');
//var babel = require('babel');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      // you may just add the file separately,
      // like done here https://github.com/wallabyjs/wallaby-react-todomvc-sample/blob/master/wallaby-babel.js
      {pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false},
      {pattern: 'sourcecode/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js*', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('babel-core'),
        // babel options
        presets: ['es2015', 'react']
      })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },

    testFramework: 'mocha'
  };
};
