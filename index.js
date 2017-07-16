/* Entry point to friendly-rolls server
   => utilizes service-oriented architecture
*/

// setup config
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./server/config/config');


var port = 3000;
app.listen(port);
console.log('listening on http://localhost:' + port);
