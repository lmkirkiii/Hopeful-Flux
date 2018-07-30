const express = require('express')
const router = express.Router()
const devController = require('../controllers/dev.js')

router.get('/', devController.show);

module.exports = router;
