const mongoose = require("mongoose");

const videoHelperSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const VideoHelper = mongoose.model("VideoHelper", videoHelperSchema);

module.exports = VideoHelper;
