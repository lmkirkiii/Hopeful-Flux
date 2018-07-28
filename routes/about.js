const express = require('express')
const router = express.Router()
 const aboutController = require('../controllers/about.js')

router.get('/:name', aboutController.index);

module.exports = router