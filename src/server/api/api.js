// main api router
//===========================================
var router = require('express').Router();

// mounting api router
router.use('/users', require('./user/userRoutes'));
router.use('/campaigns', require('./campaign/campaignRoutes'));

module.exports = router;
