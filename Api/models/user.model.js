const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    college: {
      type: String,
    },
    department: {
      type: String,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // this is reading list where we can save post that we want to read later
    readingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    vidoeList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],

    podcastList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Podcast",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    // this is the listing made by the user
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
    socialLinks: {
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      instagram: {
        type: String,
      },

      youtube: {
        type: String,
      },
    },

    profilepictureFileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfilePicture",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
