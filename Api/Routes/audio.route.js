const express = require('express');
const router = express.Router();
const { uploadAudios,uploadImage } = require('../midllewares/upload.js');
const { uploadAudio, uploadPodcastImage,getAudioById,getAudioDescriptionById,getAudios, deletePodcast} = require('../controllers/audio.controller.js');
const verifyToken = require('../midllewares/authmiddleware');

router.post('/upload/:id', uploadAudios.single('audio'),verifyToken, uploadAudio);
router.post('/uploadimage/:id', uploadImage.single('image'),verifyToken, uploadPodcastImage);
 router.get('/', getAudios);
router.get('/:id', getAudioById);
router.get('/desc/:id',getAudioDescriptionById)
router.delete('/:id',verifyToken, deletePodcast);

module.exports = router;

