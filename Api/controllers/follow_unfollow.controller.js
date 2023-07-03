const User = require("../models/user.model");
const Community = require("../models/community.model");

exports.follow = async (req, res) => {
  const type = req.query.type;
  const targetId = req.params.id;
  const follwerId = req.userId;
  try {
    if (type === "user") {
      await User.findByIdAndUpdate(targetId, {
        $addToSet: { followers: follwerId },
      });

      await User.findByIdAndUpdate(follwerId, {
        $addToSet: { following: targetId },
      });
      res.status(200).json({ message: "followed" });
    } else if (type === "community") {
      await Community.findByIdAndUpdate(targetId, {
        $addToSet: { followers: follwerId },
      });
      await User.findByIdAndUpdate(follwerId, {
        $addToSet: { following: targetId },
      });
      res.status(200).json({ message: "followed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unfollow = async (req, res) => {
  const targetId = req.params.id;
  const follwerId = req.userId;
  const type = req.query.type;
  try {
    if (type === "user") {
      await User.findByIdAndUpdate(targetId, {
        $pull: { followers: follwerId },
      });
      await User.findByIdAndUpdate(follwerId, {
        $pull: { following: targetId },
      });
      res.status(200).json({ message: "unfollowed" });
    } else if (type === "community") {
      await Community.findByIdAndUpdate(targetId, {
        $pull: { followers: follwerId },
      });
      await User.findByIdAndUpdate(follwerId, {
        $pull: { following: targetId },
      });
      res.status(200).json({ message: "unfollowed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
