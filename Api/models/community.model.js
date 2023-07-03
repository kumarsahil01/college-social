const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommunitySchema = new Schema({
  name: { type: String, required: true, trim: true, max: 10 },
  description: { type: String, required: true, trim: true, max: 100 },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  podcasts: [{ type: Schema.Types.ObjectId, ref: "Podcast" }],
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
  admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  announcements: [{ type: String, default: "" }],
  cretadBy: { type: Schema.Types.ObjectId, ref: "User" ,required:true},
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
  CummunitypictureFileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfilePicture",
    default: null,
  },

  CummunityBannerFileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfilePicture",
    default: null,
  },
  

});

module.exports = mongoose.model("Community", CommunitySchema);
