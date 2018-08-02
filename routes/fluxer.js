const express = require('express')
const router = express.Router()
const fluxerController = require('../controllers/fluxer.js')

router.get('/', fluxerController.show);

module.exports = router;