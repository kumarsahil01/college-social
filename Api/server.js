const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

//importing routes
const authroute = require("./Routes/auth.route.js");
const userroute = require("./Routes/user.routes.js");
const postroute = require("./Routes/post.route.js");
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db");
  } catch (error) {
    console.error(error);
  }
};
app.use(
  (cors = require("cors")({
    origin: "http://localhost:3000",
    credentials: true,
  }))
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// creating routes with the starting
app.use("/dev/auth", authroute);
app.use("/dev/user", userroute);
app.use("/dev/post", postroute);
app.use("/dev/comment", require("./Routes/comment.route.js"));
app.use("/dev/connect", require("./Routes/connect.route.js"));
app.use("/dev/like", require("./Routes/like.route.js"));
app.use("/dev/bookmark", require("./Routes/bookmarks.route.js"));
app.use("/dev/listing", require("./Routes/listing.route.js"));
app.use("/dev/podcast", require("./Routes/audio.route.js"));
app.use("/dev/video", require("./Routes/video.route.js"));
app.use("/dev/image", require("./Routes/image.route.js"));
app.use("/dev/community", require("./Routes/community.route.js"));
app.listen(8000, () => {
  connect();
  console.log("backend server is running  at port 8000");
});
