const express =require('express');
const router = express.Router();

const {follow,unfollow}=require('../controllers/follow_unfollow.controller.js');
const verifyToken=require('../midllewares/authmiddleware.js');
router.post('/follow/:id',verifyToken, follow);
router.post('/unfollow/:id', verifyToken,unfollow);


module.exports=router;