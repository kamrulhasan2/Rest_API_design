const healthController = require('../controllers/health.controller');
const router = require('express').Router();


router.get('/health',healthController);


module.exports = router;