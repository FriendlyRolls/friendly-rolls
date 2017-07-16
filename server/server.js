// friendly-rolls server
//===========================================
var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/api');
var config = require('./config/config');
var logBot = require('./util/logBot');
var auth = require('./auth/routes');

// connect to db via config
require('mongoose').connect(config.db.url);

if (config.seed) {
  require('./util/seed');
}

// add app middleware
require('./middleware/middleware')(app);

// setup api
app.use('/api', api);
app.use('/auth', auth);

// global error handling
app.use(function(err, req, res, next) {
  // jwt validation
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logBot.error(err.stack);
  res.status(500).send('Error: invalid token');
});

// serve client src
app.get('/', function(req, res) {
  res.sendFile(path.resolve("server", "../src/client/public/index.html"));
});
app.get('/bundle.js', function(req, res) {
  res.sendFile(path.resolve("server", "../src/client/public/bundle.js"));
});

// export app
module.exports = app;
