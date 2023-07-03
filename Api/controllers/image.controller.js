const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");

exports.getImage = async (req, res) => {
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
  

  exports.deleteImage = async (req, res) => {
    const profilepictureFileId = req.params.id;
    try {
      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "images",
      });
      await bucket.delete(new mongoose.Types.ObjectId(profilepictureFileId));
      res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }