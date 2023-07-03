const express =require('express');
const router = express.Router();

const {createcomment,getcomments,getcomment}=require('../controllers/commentcontroller.js');
 const verifyToken = require('../midllewares/authmiddleware');
router.post('/', verifyToken,createcomment);
router.get('/comments',getcomments);



module.exports=router;