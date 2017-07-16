// main api router
//===========================================
var router = require('express').Router();

// mounting api router
router.use('/users', require('./user/userRoutes'));

module.exports = router;
