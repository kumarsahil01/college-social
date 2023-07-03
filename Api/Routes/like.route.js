const express = require('express');
const router = express.Router();

const {like,unlike} = require('../Controllers/like.controller.js');
router.post('/',like);
router.post('/unlike/',unlike);

module.exports = router;