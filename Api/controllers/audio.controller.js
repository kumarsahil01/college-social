const Podcast = require("../models/podcast.model");
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const User = require("../models/user.model");
const Community = require("../models/community.model");

exports.uploadAudio = async (req, res) => {
  const creatorid = req.params.id;
  const audioFileId = req.file.id;
  const type = req.query.type;
  const userId = req.userId;

  try {
    if (type === "user") {
      if (userId !== creatorid) {
        return res
          .status(401)
          .json({ error: "you don't have permission to create podcast" });
      }

      const podcast = new Podcast({
        // this the one of the way to destructure the object
        ...req.body,
        postedBy: creatorid,
        audioFileId,
        // imageFileId,
      });
      await podcast.save();

      await User.findByIdAndUpdate(userId, {
        $push: { podcastList: podcast._id },
      });

      res
        .status(201)
        .json({ podcast, message: "Podcast created successfully" });
    } else if (type === "community") {
      const community = await Community.findById(creatorid);
      const id = community.cretadBy;
      console.log(id);
      console.log(userId);
      if (userId !== id.toString()) {
        return res
          .status(401)
          .json({ error: "you don't have permission to create podcast" });
      }
      const podcast = new Podcast({
        // this the one of the way to destructure the object
        ...req.body,
        postedBy: creatorid,
        audioFileId,
        // imageFileId,
      });
      await podcast.save();

      await Community.findByIdAndUpdate(creatorid, {
        $push: { podcasts: podcast._id },
      });
      res
        .status(201)
        .json({ podcast, message: "Podcast created successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create podcast" });
  }
};

exports.uploadPodcastImage = async (req, res) => {
  const podacstId = req.params.id;
  const imageFileId = req.file.id;
  try {
    const podcast = await Podcast.findById(podacstId);
    if (!podcast) {
      return res.status(404).json({ error: "Podcast not found" });
    }
    podcast.imageFileId = imageFileId;
    await podcast.save();
    res.status(201).json({ podcast, message: "Podcast created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create podcast" });
  }
};

exports.getAudioById = async (req, res) => {
  const podcastId = req.params.id;

  try {
    const podcast = await Podcast.findById(podcastId);
    if (!podcast) {
      return res.status(404).json({ error: "Podcast not found" });
    }

    const audioFileId = podcast.audioFileId;

    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: "podcast",
    });

    const downloadStream = bucket.openDownloadStream(audioFileId);

    res.set("Content-Type", "audio/mpeg");

    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch audio" });
  }
};

exports.getAudioDescriptionById = async (req, res) => {
  try {
    const podcastId = req.params.id;

    const podcast = await Podcast.findById(podcastId);
    if (!podcast) {
      return res.status(404).json({ error: "Podcast not found" });
    }

    const { title, description } = podcast;

    res.status(200).json({ title, description });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch audio description" });
  }
};

exports.getAudios = async (req, res) => {
  try {
    const podcasts = await Podcast.find();

    res.status(200).json({ podcasts });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch podcasts" });
  }
};

exports.deletePodcast = async (req, res) => {
  const podcastId = req.params.id;
  const type=req.query.type;
  const userId = req.userId;

  try {
    if (type === "user") {
      const podcast = await Podcast.findById(podcastId);
      if (!podcast) {
        return res.status(404).json({ error: "Podcast not found" });
      }
      if (userId !== podcast.postedBy.toString()) {
        return res
          .status(401)
          .json({ error: "you don't have permission to delete podcast" });
      }
      //find user and remove this podcast from them
      const user=await User.findById(podcast.postedBy);
      user.podcastList.pull(podcastId);
      await user.save();

      const audioFileId = podcast.audioFileId;

      // Delete the podcast document
      await Podcast.findByIdAndDelete(podcastId);

      // Delete the audio file from GridFS
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "podcast",
      });

      await bucket.delete(audioFileId);
      res.status(200).json({ message: "Podcast deleted successfully" });
    } else if (type === "community") 
    { 
      const podcast = await Podcast.findById(podcastId);
      if (!podcast) {
        return res.status(404).json({ error: "Podcast not found" });
      }
      const community = await Community.findById(podcast.postedBy);
      const id = community.cretadBy;
      console.log(id);
      console.log(userId);
      if (userId !== id.toString()) {
        return res
          .status(401)
          .json({ error: "you don't have permission to delete podcast" });
      }
      const audioFileId = podcast.audioFileId;
      community.podcasts.pull(podcastId);
      await community.save();

      // Delete the podcast document
      await Podcast.findByIdAndDelete(podcastId);

      // Delete the audio file from GridFS
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "podcast",
      });

      await bucket.delete(audioFileId);
      res.status(200).json({ message: "Podcast deleted successfully" });

    }
   
  } catch (error) {
    res.status(500).json({ error: "Failed to delete podcast" });
  }
};
