const express = require('express')
const router = express.Router()
const aboutController = require('../controllers/about.js')

router.get('/about', function(req, res) {
	res.render('about/about', { name: req.params.name })
})

module.exports = router