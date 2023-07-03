const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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

    audioFileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PodcastAudio",
      required: true,
    },
    imageFileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfilePicture",
      default: null,
    }
  },
  { timestamps: true }
);

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
