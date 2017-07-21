// campaign routes
//===========================================
var router = require('express').Router();
var loggBot = require('../../util/logBot');
var controller = require('./campaignController');

// setup routes
router.route('/')
  .get(controller.get)

module.exports = router;
