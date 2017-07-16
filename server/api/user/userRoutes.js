var router = require('express').Router();
var loggBot = require('../../util/logBot');
var controller = require('./userController');

// setup routes

router.route('/')
  .get(controller.get)
  .post(controller.post)

module.exports = router;
