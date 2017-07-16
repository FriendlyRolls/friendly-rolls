var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logBot = require('./util/logBot');

// connect to db via config
require('mongoose').connect(config.db.url);

if (config.seed) {
  require('./util/seed');
}

// add app middleware
require('./middleware/middleware')(app);

// setup api
app.use('/api', api);

// serve client app
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/src/client/public/index.html");
});
app.get('/bundle.js', function(req, res) {
  res.sendFile(__dirname + "/src/client/public/bundle.js");
});

// export app
module.exports = app;
