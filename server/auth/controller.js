var User = require('../api/user/userModel');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  // send json token after user verified
  var token = signToken(req.user._id);
  res.json({token: token});
};
