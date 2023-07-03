const express = require('express');
const router = express.Router();
const { getImage,deleteImage } = require('../controllers/image.controller');
const verifyToken = require('../midllewares/authmiddleware');

router.get('/:id', verifyToken, getImage);
router.delete('/:id', verifyToken, deleteImage);


module.exports = router;