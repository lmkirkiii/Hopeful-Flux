const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update.js')

router.get('/', updateController.show);
router.post('/new', updateController.update);


module.exports = router;
