var static = require('node-static');
var path = require('path');
var settings = require('../settings.js');
var prod = path.resolve(__dirname, '../', settings.productionDir);

var server = new static.Server(prod, {
  gzip: true,
});

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 5000);
