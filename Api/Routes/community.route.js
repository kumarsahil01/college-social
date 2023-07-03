const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');
const verifyToken = require('../midllewares/authmiddleware.js');
const { uploadImage } = require('../midllewares/upload.js');

router.post('/create',verifyToken, communityController.createCommunity);
router.put('/profilepic/:id',verifyToken,uploadImage.single("image"), communityController.updateCommunityProfilePic);
router.put('/bannerpic/:id',verifyToken,uploadImage.single("image"), communityController.updateCommunityBannerPic);

router.get('/get',verifyToken,communityController.getCommunitys);
router.get('/get/:id',verifyToken,communityController.getCommunityById);
router.put('/update/:id',verifyToken,communityController.updateCommunity);
router.delete('/delete/:id',verifyToken,communityController.deleteCommunity);

router.post('/removeMember/:id',verifyToken,communityController.removeMember);
router.post('/addAdmin/:id',verifyToken,communityController.addAdmin);
router.post('/removeAdmin/:id',verifyToken,communityController.removeAdmin);


module.exports = router;