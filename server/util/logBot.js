// updateBot makes custom updates on the console
//==============================================

// import colors for updates
require('colors');
var _ = require('lodash');
var config = require('../config/config');

// no operation function when updates are disabled
var noop = function(){};
// sets logging depending on config settings
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logBot = {
  log: function() {
    var tag = '[ ⚡️  UPDATES ]'.green;
    var args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          // convert objects to string for logging
          var string = JSON.stringify(arg, null, 2);
          return tag + '  ' + string.cyan;
        } else {
          return tag + '  ' + arg.cyan;
        }
      });

    // apply either console.log or custom logging
    consoleLog.apply(console, args);
  },

  error: function() {
    var args = _.toArray(arguments)
      .map(function(arg) {
        arg = arg.stack || arg;
        var name = arg.name || '[ ERROR ]'.red;
        var log = name.yellow + '  ' + arg.red;
        return log;
      });

    consoleLog.apply(console, args);
  }
};

module.exports = logBot;
