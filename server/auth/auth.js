var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var config = require('../config/config');
var checkToken = expressJwt({ secret: config.secrets.jwt });
var User = require('../api/user/userModel');

exports.decodeToken = function() {
  return function(req, res, next) {
    // allow token on query string and decoding
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    // check for valid token and call next
    checkToken(req, res, next);
  };
};

exports.getFreshUser = function() {
  return function(req, res, next) {
    User.findById(req.user._id)
      .then(function(user) {
        if (!user) {
          // check if user is registered
          res.status(401).send('Unauthorized');
        } else {
          // update user and restore
          req.user = user;
          next();
        }
      }, function(err) {
        next(err);
      });
  }
};

exports.verifyUser = function() {
  return function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // send error status when no username or password
    if (!username || !password) {
      res.status(400).send('Error: need username and password');
      return;
    }

    // verify user in db
    User.findOne({username: username})
      .then(function(user) {
        if (!user) {
          res.status(401).send('Error: Invalid username');
        } else {
          // verify matching user data
          if (!user.authenticate(password)) {
            res.status(401).send('Error: Invalid password');
          } else {
            // sign token if all passes
            req.user = user;
            next();
          }
        }
      }, function(err) {
        next(err);
      });
  };
};

// sign tokens
exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt
    // {expiresInMinutes: config.expireTime}
  );
};
