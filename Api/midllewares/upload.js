const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

require("dotenv").config();

// Create a GridFS storage engine
const Audiostorage = new GridFsStorage({
  url: process.env.MONGO,

  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `podcast_${Date.now()}.mp3`;
      const fileInfo = {
        filename: filename,
        bucketName: "podcast",
      };
      resolve(fileInfo);
    });
  },
});

//create a mutlter storage engine for video
const videostorage= new GridFsStorage({
  url: process.env.MONGO,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `video${Date.now()}.mp4`;
      const fileInfo = {
        filename: filename,
        bucketName: "videos",
      };

      resolve(fileInfo);

    });
  },
});

const imagestorage = new GridFsStorage({
  url: process.env.MONGO,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `image${Date.now()}.jpeg`;
      const fileInfo = {
        filename: filename,
        bucketName: "images",
      };

      resolve(fileInfo);

    });
  },
});


exports.uploadAudios = multer({ storage: Audiostorage });
exports.uploadVideo = multer({  storage: videostorage });
exports.uploadImage = multer({ storage: imagestorage });

