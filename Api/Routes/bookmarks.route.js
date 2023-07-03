const express = require('express');
const router = express.Router();
const verifyToken = require('../midllewares/authmiddleware.js');
const {bookmark, unbookmark} = require('../controllers/bookmark.controller.js');
router.post('/' ,verifyToken,bookmark);
router.post('/unbookmark/',verifyToken,unbookmark);

module.exports = router;