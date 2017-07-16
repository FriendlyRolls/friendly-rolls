// config to set up environment
// =====================================
// import lodash for merging
var _ = require('lodash');

var config = {
  dev: 'development',
  prod: 'production',
  port: process.env.PORT || 3000,
  // token exp time: 10 days
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT || 'firsttoken2584'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;
// fallback to an empty object if error
try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}
console.log('envConfig setting:\n=================\n', envConfig);
// merge the two config files and export
var mergedConfig = _.merge(config, envConfig);
console.log('mergedConfig:\n============\n', mergedConfig);

module.exports = mergedConfig;
