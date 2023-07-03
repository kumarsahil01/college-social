const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
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

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        default: [],
        desc: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    bookmarked: {
      type: Number,
      default: 0,
    },
    sposored: {
      type: Boolean,
      default: false,
    },
    sposoredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    ProfilePictureFileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfilePicture",
    },

  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
