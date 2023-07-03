const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
    },

    comments: [
      {
        default: [],
        desc: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
    bookmarks: {
      type: Number,
      default: 0,
    },
    videoFileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoHelper",
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
