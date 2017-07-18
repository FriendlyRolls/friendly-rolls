/* Entry point to friendly-rolls server
   => utilizes service-oriented architecture
*/

// setup config
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./server/config/config');
var app = require('./server/server');
var logBot = require('./server/util/logBot');

app.listen(config.port);
logBot.log('listening on http://localhost:' + config.port);
