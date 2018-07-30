const express = require('express')
const router = express.Router()
const promptController = require('../controllers/prompt.js')

router.get('/', promptController.show);

module.exports = router;
