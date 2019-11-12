const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/findersFee', require('./findersFee'));

module.exports = router;