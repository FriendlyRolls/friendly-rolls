// auth routes
//===========================================
var router = require('express').Router();
var verifyUser = require('./auth').verifyUser;
var controller = require('./controller');

// verify user before sending token
router.post('/signin', verifyUser(), controller.signin);

module.exports = router;
