const Listing = require("../models/lisitng.model.js");
const User = require("../models/user.model.js");
const Community = require("../models/community.model.js");

exports.create = async (req, res) => {
  const userId = req.params.id;
 
  const imageid = req.file.id;
  const type = req.query.type;

  try {
    if (!userId) {
      throw new Error("user not found");
    }
    const listingData = {
      ...req.body,
      lisitngImageId: imageid,
      postedBy: userId,
    };
    const listing = await Listing.create(listingData);
    // find user and add this listing to the user's listings array
    if (type === "user") {
      await User.findByIdAndUpdate(userId, {
        $push: { listings: listing._id },
      });
    } else if (type === "community") {
      await Community.findByIdAndUpdate(userId, {
        $push: { listings: listing._id },
      });
    }

    res.status(201).json({ listing });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json({ listings });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { category } = req.params;
    const listing = await Listing.find({ category });
    res.status(200).json({ listing });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};
exports.getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.status(200).json({ listing });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.update = async (req, res) => {
  const listingid = req.params.id;
  const { category, title, description, tags } = req.body;
  try {
    const listing = await Listing.findByIdAndUpdate(
      listingid,
      {
        category,
        title,
        description,
        tags,
      },
      { new: true }
    );
    if (!listing) throw new Error("listing not found");
    res.status(200).json({ listing });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.deletelisting = async (req, res) => {
  const listingid = req.params.id;
  const userId = req.userId;
  const type = req.query.type;
  const listing = await Listing.findById(listingid);
  const createdby = listing.postedBy;
  try {
    if (type === "user") {
      const id = listing.postedBy;
      //remove the listing from the user listing array
      const user = await User.findById(id);
      const userlisiting = user.listings;
      if (!userlisiting.includes(listingid)) {
        return res
          .status(401)
          .json({ error: "the listing does not include in your lisitngs" });
      }
      if (id != userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const index = userlisiting.indexOf(listingid);
      console.log(index);
      userlisiting.splice(index, 1);
      await User.findByIdAndUpdate(id, {
        listings: userlisiting,
      });
      //delete the listing
     
      await Listing.findByIdAndDelete(listingid);
      res.status(200).json({ message: "listing deleted" });
    } else if (type === "community") {
      const id = listing.postedBy;
      const community = await Community.findById(id);
      const communitylsiting = community.listings;
      if (!communitylsiting.includes(listingid)) {
        return res
          .status(401)
          .json({ error: "the listing does not include in your lisitngs" });
      }

      //remove the listing from the community listing array
      const index = communitylsiting.indexOf(listingid);
      communitylsiting.splice(index, 1);
      await Community.findByIdAndUpdate(id, {
        listings: communitylsiting,
      });
      //delete the listing
      const adminId = community.cretadBy;
      if (adminId != userId) {
        return res
          .status(401)
          .json({
            error: " you are not the owner so you can not delete the listing",
          });
      }
      await Listing.findByIdAndDelete(listingid);
      res.status(200).json({ message: "listing deleted" });
    }
  } catch {
    res.status(400).json({ message: "Bad request" });
  }
};
