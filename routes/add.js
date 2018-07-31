const express = require('express')
const router = express.Router()
const addController = require('../controllers/add.js')

router.get('/', addController.show);
router.post('/',  addController.create);

module.exports = router;
