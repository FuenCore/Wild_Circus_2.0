const express = require("express");
const user = require('./user');
const clown = require('./clown');
const history = require('./history');
const exploit = require('./exploit');

const router = express.Router();

router.use("/user", user);
router.use("/clown", clown);
router.use('/history', history);
router.use('/exploit', exploit)

module.exports = router;