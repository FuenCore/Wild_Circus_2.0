const express = require("express");
const user = require('./user');
const clown = require('./clown');
const history = require('./history');
const exploit = require('./exploit');
const auth = require('./auth/auth');
const chat = require('./chat')

const router = express.Router();

router.use("/user", user);
router.use("/clown", clown);
router.use('/history', history);
router.use('/exploit', exploit);
router.use('/chat', chat);
router.use('/auth', auth);

module.exports = router;