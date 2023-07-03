const Post = require("../models/post.model");
const User = require("../models/user.model");
const Podcast = require("../models/podcast.model");
const Video = require("../models/video.model");

exports.bookmark = async (req, res) => {
   const type = req.query.type;
  const  id= req.query.id;
  const userId = req.userId;
  let entity;
  
  try {
     if(type === 'post'){
      entity = await Post.findById(id);
    }else if( type==='podcast'){
      entity = await Podcast.findById(id);
    }else if(type === 'video'){
      entity = await Video.findById(id);
    }else{
      res.status(404).json({ message: "Invalid type" });
    }

    const user = await User.findById(userId);
    if (!entity) {
      res.status(404).json({ message: "Entity not found" });
    }
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    if (user.readingList.includes(id)) {
      res.status(404).json({ message: "Entity already bookmarked" });
    } else {
      user.readingList.push(id);
      await user.save();
      res.status(200).json({ message: "Entity bookmarked" });
    }

    entity.bookmarks += 1;
    await entity.save();
  } catch (error) {
    res.status(500).json({ error });
  }
};
   

exports.unbookmark = async (req, res) => {
  const type = req.query.type;
  const  id= req.query.id;
  const userId = req.userId;
  let entity;
  try {
     
      if(type === 'post'){
       entity = await Post.findById(id);
     }else if( type==='podcast'){
       entity = await Podcast.findById(id);
     }else if(type === 'video'){
       entity = await Video.findById(id);
     }else{
       res.status(404).json({ message: "Invalid type" });
     }
     const user = await User.findById(userId);
    if (!entity) {
      res.status(404).json({ message: "Entity not found" });
    }
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
     
    
    if (!user.readingList.includes(id)) { 
      res.status(404).json({ message: "Entity not bookmarked" });
    } else {
      user.readingList.pull(id);
      await user.save();
      res.status(200).json({ message: "Entity unbookmarked" });
    }
    entity.bookmarks -= 1;
    await entity.save();
  } catch (error) {
    res.status(500).json({ error });
  }
};

