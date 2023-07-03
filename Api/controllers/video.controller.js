const Video = require("../models/video.model");
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const User = require("../models/user.model");
const Community = require("../models/community.model");


exports.uploadVideos = async (req, res) => {
  
  const userId = req.userId;
  const type = req.query.type;
  const id = req.query.id;

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file provided" });
    }
    if (type === "user") {
      
      if (id!==userId) {
        res
          .status(401)
          .json({ error: "you don't have permission to create video" });
      }
      const video = new Video({
        ...req.body,
        videoFileId: req.file.id,
        postedBy: id,
      });
      await video.save();

      const user = await User.findById(id);
      console.log(user);
      user.vidoeList.push(video._id);
      await user.save();

      res.status(201).json({ video, message: "Video uploaded successfully" });

    } else if (type === "community") {
      console.log('community');

      let community = await Community.findById(id);
      console.log(community);
      if(!community){
        return res.status(404).json({ error: "Community not found" });
      }
      const cid = community.cretadBy;
      
    
      if (userId !== cid.toString()) {
        return res
          .status(401)
          .json({ error: "you don't have permission to create video" });
      }
      const video = new Video({
        ...req.body,
        videoFileId: req.file.id,
        postedBy: id,
      });

      await video.save();
      
      community.videos.push(video._id);
      await community.save();
      res.status(201).json({ video, message: "Video uploaded successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to upload video" });
  }
};  

exports.getVideoById = async (req, res) => {
  const videoId = req.params.id;

  try {
    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const videoFileId = video.videoFileId;

    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: "videos",
    });

    const downloadStream = bucket.openDownloadStream(videoFileId);

    res.set("Content-Type", "video/mp4");

    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video" });
  }
};

exports.getVideoDescriptionById = async (req, res) => {
  try {
    const videoId = req.params.id;

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    res.status(200).json({ video });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video description" });
  }
};

exports.deleteVideoById = async (req, res) => {
  const type=req.query.type;
  const userId = req.userId;
  const videoId = req.params.id;
  const video = await Video.findById(videoId);
  try {
    if(type==='user'){
      const id=video.postedBy;
      console.log(id);
      if(id.toString()!==userId){
        return res.status(401).json({ error: "you don't have permission to delete video" });
      }
      const user=await User.findById(userId);
      //remove video from user videoList
      const index=user.vidoeList.indexOf(videoId);
      if(index===-1){
        return res.status(404).json({ error: "Video not found" });
      }
      user.vidoeList.splice(index,1);
      await user.save();
    
      //delete video
      await Video.findByIdAndDelete(videoId);
      const videoFileId = video.videoFileId;
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "videos",
      });
      await bucket.delete(videoFileId);
      res.status(200).json({ message: "Video deleted successfully" }); 
    }
    else if(type==='community'){
       const community=await Community.findById(video.postedBy);
        if(!community){
          return res.status(404).json({ error: "Community not found" });
        }
        const cid=community.cretadBy;
        if(userId!==cid.toString()){
          return res.status(401).json({ error: "you don't have permission to delete video" });
        }
        const index=community.videos.indexOf(videoId);
        if(index===-1){
          return res.status(404).json({ error: "Video not found" });
        }
        community.videos.splice(index,1);
        await community.save();
        await Video.findByIdAndDelete(videoId);
        const videoFileId = video.videoFileId;
        const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: "videos",
        });
        await bucket.delete(videoFileId);
        res.status(200).json({ message: "Video deleted successfully" });

    }
    
  } catch (error) {
    res.status(500).json({ error: "Failed to delete video" });
  }
};

exports.getVideosfromspecificuser = async (req, res) => {
  const userId = req.params.id;
  try {
    const videos = await Video.find({ postedBy: userId });
    res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}

exports.getVideosbycategory = async (req, res) => {
   const category = req.query.category;

   try{
      const videos = await Video.find({ category: category });
      res.status(200).json({ videos });
   }
    catch(error){
      res.status(500).json({ error: "Failed to fetch videos" });
    }
}
