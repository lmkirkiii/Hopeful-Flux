const express = require('express')
const router = express.Router()
const deleteController = require('../controllers/delete.js')

router.get('/', deleteController.show);
router.post('/end', deleteController.delete);


module.exports = router;
