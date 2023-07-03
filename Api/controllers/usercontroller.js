const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");
const { use } = require("../Routes/user.routes.js");

// Configure multer middleware for file uploads
const upload = multer({ dest: "uploads/" });

exports.getUser = async (req, res) => {
  const userid = req.params.id;

  try {
    const currentuser = await User.findById(userid);
    if (currentuser) {
      res.status(201).json({ message: "User found successfully", currentuser });
    } else {
      res.status(401).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  const userid = req.params.id;
  const {
    firstName,
    lastName,
    email,
    password,
    dob,
    college,
    department,
    socialMedia,
  } = req.body;
  try {
    const currentuser = await User.findOne({ _id: userid });
    if (currentuser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const updateduser = await User.updateOne(
        { _id: userid },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            dob: dob,
            college: college,
            department: department,
            socialMedia: socialMedia,
          },
        }
      );
      res.status(201).json({ message: "User updated successfully" });
    } else {
      res.status(401).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  const userid = req.params.id;

  try {
    const currentuser = await User.findById(userid);
    if (currentuser) {
      const deleteduser = await User.findByIdAndDelete(userid);
      res
        .status(201)
        .json({ message: "User deleted successfully", deleteduser });
    } else {
      res.status(401).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.getProfilePic = async (req, res) => {
  const profilepictureFileId = req.params.id;
  try {
    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: "images",
    });
    console.log(profilepictureFileId);
    const downloadStream = bucket.openDownloadStream(
      new mongoose.Types.ObjectId(profilepictureFileId)
    );
    downloadStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateProfilePic = async (req, res) => {
  let userId = req.params.id;
  let user = await User.findById(userId);
  
  const profilepictureFileId = req.file.id;
  try {
   
    if (user.profilepictureFileId) {
        const bucket = new GridFSBucket(mongoose.connection.db, {
            bucketName: "images",
          });
      await bucket.delete(user.profilepictureFileId);
    }

    user.profilepictureFileId = profilepictureFileId;
    user.save();
    
    res.status(201).json({ message: "Profile picture updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProfilePic = async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const profilepictureFileId = user.profilepictureFileId;
      if (profilepictureFileId) {
        const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: "images",
        });
        await bucket.delete(new mongoose.Types.ObjectId(profilepictureFileId));
        // Update the user document to remove the profile picture file ID
        user.profilepictureFileId = null;
        await user.save();
  
        return res.status(200).json({ message: "Profile picture deleted successfully" });
      } else {
        return res.status(401).json({ message: "User does not have a profile picture" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };