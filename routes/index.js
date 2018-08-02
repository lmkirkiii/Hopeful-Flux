const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/flux', require('./flux'));
router.use('/about', require('./about'));
router.use('/mission', require('./mission'));
router.use('/meaning', require('./meaning'));
router.use('/dev', require('./dev'));
router.use('/prompt', require('./prompt'));
router.use('/add', require('./add'));
router.use('/update', require('./update'));
router.use('/delete', require('./delete'));


router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router;