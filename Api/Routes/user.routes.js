const express=require('express');
const router=express.Router();


const {update,deleteUser,getUser,getProfilePic,updateProfilePic,deleteProfilePic}=require('../controllers/usercontroller');

const verifyToken = require('../midllewares/authmiddleware');
const { uploadImage } = require('../midllewares/upload');
router.get('/:id',verifyToken,getUser);
router.put('/update/:id',verifyToken,update);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/profilepic/:id',getProfilePic);
router.put('/profilepic/:id',verifyToken,uploadImage.single("image"), updateProfilePic)
router.delete('/profilepic/:id',verifyToken,deleteProfilePic)

module.exports=router;