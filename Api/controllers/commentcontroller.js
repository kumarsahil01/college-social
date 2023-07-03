const Comment = require("../models/comment.model.js");
const Post = require("../models/post.model.js");
const Video = require("../models/video.model.js");
const Podcast = require("../models/podcast.model.js");

// Create and Save a new Comment
exports.createcomment = async (req, res) => {
  const id = req.query.id;
  const type = req.query.type;
  const userid = req.userId;
  const { desc } = req.body;
  try {
    let entity;
    if (type === "post") {
      entity = await Post.findById(id);
    } else if (type === "podcast") {
      entity = await Podcast.findById(id);
    } else if (type === "video") {
      entity = await Video.findById(id);
    }
    if (!entity) {
      return res.status(404).json({ error: "entity not found" });
    }
    const comment = new Comment({
      desc,
      postedBy: userid,
    });

    entity.comments.push(comment);
    await entity.save();
    res.status(201).json({ message: "comment created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create comment" });
  }
};

exports.getcomments = async (req, res) => {
  const postid = req.query.id;
  const type = req.query.type;

  try {
    let entity;
    if (type === "post") {
      entity = await Post.findById(postid);
    } else if (type === "podcast") {
      entity = await Podcast.findById(postid);
    } else if (type === "video") {
      entity = await Video.findById(postid);
    }
    if (!entity) {
      return res.status(404).json({ error: "entity not found" });
    }
    const comments = entity.comments;
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get comments" });
  }
};
