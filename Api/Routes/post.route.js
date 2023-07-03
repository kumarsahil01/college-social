const express= require('express');
const router = express.Router();
const { createpost,getpost,getposts,deletepost ,deletepostpic} = require('../controllers/postcontroller.js');
const { uploadImage } = require('../midllewares/upload.js');
const verifyToken = require('../midllewares/authmiddleware.js');
router.post('/', uploadImage.single('postimage'),verifyToken, createpost);
router.get ('/posts/:id',getposts);
router.get ('/:id',getpost);
router.delete('/:id',verifyToken,deletepost);


module.exports = router;
