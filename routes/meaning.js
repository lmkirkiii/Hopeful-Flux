const express = require('express')
const router = express.Router()
const meaningController = require('../controllers/meaning.js')

router.get('/', meaningController.show);

module.exports = router;
