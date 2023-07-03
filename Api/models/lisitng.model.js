const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  lisitngImageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfilePicture",
    default: null,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
