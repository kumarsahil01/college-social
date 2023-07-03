const express=require('express');
const router=express.Router();
const {Register,update,Login,deleteUser ,logout}=require('../controllers/authcontroller');
const { uploadImage } = require('../midllewares/upload');

router.post('/register' ,uploadImage.single('profileimage') ,Register);
router.post( '/login',Login);
router.post('/logout',logout);


module.exports=router;