const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update.js')

router.get('/', updateController.show);
router.put('/:id', updateController.create);

module.exports = router;