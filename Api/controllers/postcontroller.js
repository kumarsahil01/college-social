const Post = require("../models/post.model.js");
const User = require("../models/user.model.js");
const Community = require("../models/community.model.js");
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");
exports.createpost = async (req, res) => {
  const id=req.query.id;
  const type=req.query.type;
  let entity; 
  const { title, body, tags, category } = req.body;
  try {
    if(type==='user'){
      entity=await User.findById(id);
    }else if(type==='community'){
      entity=await Community.findById(id);
    }
   
    if(!entity){
      return res.status(404).json({error:'entity not found'});
    }

    const ProfilePictureFileId = req.file.id;

    if(!ProfilePictureFileId)
    return res.status(400).json({error:'Please upload a file'});
    const post = await Post.create({
      title,
      body,
      tags,
      category,
      postedBy: id,
      ProfilePictureFileId,
      
    });
    entity.posts.push(post._id);
    await entity.save();
    res.status(201).json({ post });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.getpost = async (req, res) => {
  const postid = req.params.id;
  try {
    const post = await Post.findById(postid);
    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.getposts = async (req, res) => {
  const userid = req.params.id;
  try {
    const posts = await Post.find({ postedBy: userid });
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.deletepost = async (req, res) => {
  const postid = req.params.id;
  const userId=req.userId;
  const type=req.query.type;
  try {
    if(type==='user'){
      const post=await Post.findById(postid);
      const id=post.postedBy;
      if(id!=userId){
        return res.status(401).json({error:'Unauthorized'});
      }

      const postpicid=post.ProfilePictureFileId;

      await User.findByIdAndUpdate(id,{$pull:{posts:postid}});
      await Post.findByIdAndDelete(postid);
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "images",
      });
      if(postpicid){
        await bucket.delete(postpicid);
      }
     
      res.status(200).json({message:'Post deleted successfully'});

    }else if(type==='community'){
      const communitypost= await Post.findById(postid);
      const communityid=communitypost.postedBy;
      const community=await Community.findById(communityid);
      const cid=community.cretadBy;
      if(cid!=userId){
        return res.status(401).json({error:'Unauthorized'});
      }
      await Community.findByIdAndUpdate(communityid,{$pull:{posts:postid}});
      const postpicid=communitypost.ProfilePictureFileId;
      await Post.findByIdAndDelete(postid);
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "images",
      });
      if(postpicid){
        await bucket.delete(postpicid);
      }
      res.status(200).json({message:'Post deleted successfully'});
    }
  } catch (err) {
    res.status(500).json({ err });
  }
}



