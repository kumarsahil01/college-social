const express = require('express');
const { create, getAll, getOne,update, deletelisting, getOneById } = require('../controllers/listing.controller.js');
const router = express.Router();
const verifyToken = require('../midllewares/authmiddleware.js');
const {uploadImage}=require('../midllewares/upload.js');

router.post('/:id',uploadImage.single('image'), verifyToken, create);
router.get('/', getAll);
router.get('/:id', getOneById);
router.get('/:category', getOne);
router.put('/:id', update);
router.delete('/:id',verifyToken, deletelisting);

module.exports = router;