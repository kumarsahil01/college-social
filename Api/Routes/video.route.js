const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller');
const {uploadVideo} = require('../midllewares/upload.js');
const verifyToken = require('../midllewares/authmiddleware');
verifyToken
router.post('/upload',verifyToken, uploadVideo.single('video'), videoController.uploadVideos);
router.get('/:id', videoController.getVideoById);
router.get('/description/:id', videoController.getVideoDescriptionById);
router.get('/videos/:id', videoController.getVideosfromspecificuser);
router.get('/', videoController.getVideosbycategory);
router.delete('/:id',verifyToken, videoController.deleteVideoById);

module.exports = router;
