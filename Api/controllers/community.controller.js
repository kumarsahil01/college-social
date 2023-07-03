const Community = require("../models/community.model.js");
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");
const { Grid } = require("gridfs-stream");
// Create and Save a new Community
exports.createCommunity = async (req, res) => {
  const userId = req.userId;

  // Validate request
  try {
    if (!req.body.name || !req.body.description) {
      return res.status(400).send({
        message: "Community name can not be empty",
      });
    }
    // Create a Community
    const community = new Community({
      ...req.body,
      cretadBy: userId,
    });
    //save user to admins also
    community.admins.push(userId);
    // Save Community in the database
    const data = await community.save();
    res.send(data);

    res.status(201).send({ message: "Community created successfully" });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Community.",
    });
  }
};

exports.getCommunitys = async (req, res) => {
  try {
    const community =  await Community.find();
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving community.",
    });
  }
};

exports.getCommunityById = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving community.",
    });
  }
};

exports.updateCommunity = async (req, res) => {
  const userId = req.userId;
  try {
    //check if user try to user exist in the admins
    const community = await Community.findById(req.params.id);
    const admins = community.admins;
    const admin = admins.find((admin) => admin == userId);

    if (!admin) {
      return res.status(400).send({
        message: "You are not admin of this community",
      });
    }
    //update the community
    let updatedCommunity = { ...req.body };
    community.set(updatedCommunity);

    const savedCommunity = await community.save();
    res.send(savedCommunity);

  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving community.",
    });
  }
};

exports.deleteCommunity = async (req, res) => {
  const userId = req.userId;

  try {
    //check if user try to user exist in the admins
    const community = await Community.findById(req.params.id);
    const admins = community.admins;
    const admin = admins.find((admin) => admin == userId);
    if (!admin) {
      return res.status(400).send({
        message: "You are not admin of this community",
      });
    }
    //delete the community

    await community.delete();
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while deleting community.",
    });
  }
};

exports.removeMember = async (req, res) => {
  const memberid = req.query.memberid;
  const userId = req.userId;
  try {
    //check if user try to user exist in the admins
    const community = await Community.findById(req.params.id);
    const admins = community.admins;
    const admin = admins.find((admin) => admin == userId);
    if (!admin) {
      return res.status(400).send({
        message: "You are not admin of this community",
      });
    }
    //delete the specific member
    const members = community.members;
    const member = members.find((member) => member == memberid);
    if (!member) {
      return res.status(400).send({
        message: "Member not found",
      });
    }
    members.splice(members.indexOf(member), 1);
    community.members = members;
    await community.save();
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving community.",
    });
  }
};

exports.addAdmin = async (req, res) => {
  const userId = req.userId;
  const adminId = req.query.adminid;
 
  try {
    //check if user try to user exist in the admins
    const community = await Community.findById(req.params.id);
    const cretadBy = community.cretadBy;
     if(cretadBy != userId){
        return res.status(400).send({
            message: "You are not owner  of this community you can not add admin",
            });
        }
    //add the specific member
    const members = community.members;
    if(!members){
        return res.status(400).send({
            message: "No members in the community",
            });
    }
    const member = members.find((member) => member == adminId);
    if (!member) {
      return res.status(400).send({
        message: "Member not found in the community to promote someone to admin you must have member in the community",
      });
    }
   
    community.admins.push(member);
    await community.save();
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while adding admins to the  community.",
    });
  }
};

exports.removeAdmin = async (req, res) => {
  const userId = req.userId;
  const adminId = req.query.adminid;
  try {
    //check if user try to user exist in the admins
    const community = await Community.findById(req.params.id);
    const admins = community.admins;
    const cretadBy = community.cretadBy;
    console.log(cretadBy);
    if (cretadBy != userId) {
        return res.status(400).send({
            message: "You are not owner  of this community you can not remove admin",
        });

    }
    
    
    const removedadmin = admins.find((admin) => admin == adminId);
    if(!removedadmin){
        return res.status(400).send({
            message: "This member is not an admin of this community",
        });
    }

    admins.splice(admins.indexOf(removedadmin), 1);
    community.admins = admins;
    await community.save();
    res.send(community);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving community.",
    });
  }
};

exports.updateCommunityProfilePic = async (req, res) => {
    console.log("start int of updation of community profile pic");
    const communityId = req.params.id;
    const userId = req.userId;
  
    try {
      const community = await Community.findById(communityId);
      const admins = community.admins;
      const admin = admins.find((admin) => admin == userId);
      if (!admin) {
        return res.status(400).send({
          message: "You are not admin of this community",
        });
      }
        if (community.CummunitypictureFileId) {
              const bucket= new GridFSBucket(mongoose.connection.db, {

                bucketName: "images",
                });
                bucket.delete(community.CummunitypictureFileId);
                community.CummunitypictureFileId = null;
        }
  
      if (!req.file) {
        return res.status(400).send({
          message: "Please upload a file",
        });
      }
  
      community.CummunitypictureFileId = req.file.id;
      await community.save();
  
      res.status(201).send({
        message: "Picture uploaded successfully",
        community: community,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving community.",
      });
    }
  };
  
exports.updateCommunityBannerPic = async (req, res) => {
    console.log("start int of updation of community banner pic");
    const communityId = req.params.id;
    const userId = req.userId;
  
    try {
      const community = await Community.findById(communityId);
      const admins = community.admins;
      const admin = admins.find((admin) => admin == userId);
      if (!admin) {
        return res.status(400).send({
          message: "You are not admin of this community",
        });
      }
        if (community.CummunityBannerFileId) {
              const bucket= new GridFSBucket(mongoose.connection.db, {

                bucketName: "images",
                });
                bucket.delete(community.CummunityBannerFileId);
                community.CummunityBannerFileId = null;
        }
  
      if (!req.file) {
        return res.status(400).send({
          message: "Please upload a file",
        });
      }
  
      community.CummunityBannerFileId = req.file.id;
      await community.save();
  
      res.status(201).send({
        message: "Picture uploaded successfully",
        community: community,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving community.",
      });
    }
};

exports.deleteCommunity = async (req, res) => {
    const userId = req.userId;
    const communityId = req.params.id;
    try {
      const community = await Community.findById(communityId);
      const cretadBy = community.cretadBy;
      if (cretadBy != userId) {
        return res.status(400).send({
          message: "You are not owner  of this community you can not delete it",
        });
      }
      if (community.CummunitypictureFileId) {
        const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: "images",
        });
        bucket.delete(community.CummunitypictureFileId);
      }
      if (community.CummunityBannerFileId) {
        const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: "images",
        });
        bucket.delete(community.CummunityBannerFileId);
      }
      await community.deleteOne();
      res.send({
        message: "Community deleted successfully",
      });
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving community.",
      });
    }
  }