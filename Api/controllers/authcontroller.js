const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Register = async (req, res) => {
  try {
    // Retrieve user data from request body
    const {
      firstName,
      lastName,
      email,
      password,
      dob,
      college,
      department,
      socialMedia,
      profilepictureFileId,
      podcastList,
      videoList,
      listings,
      posts,
      readingList

    } = req.body;

    // Check if user with the same email already exists
    const currentuser = await User.findOne({ email });
    if (currentuser) {
      return res.status(401).json({ message: "User already exists" });
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        dob,
        college,
        department,
        socialMedia,
        profilepictureFileId: req.file.id,
        podcastList,
       videoList,
      listings,
      posts,
      readingList

      });
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // here i want to fetch the user's profile picture
    const profilePicture = await User.findById(user.profilepictureFileId);
    console.log(profilePicture);
    const payload = {
      user: {
        id: user._id,
      },
    };
    const { password, ...info } = user._doc;

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        res.cookie("acessToken", token, {  httpOnly: true });
        res.status(200).json({ message: "Login successful", token });
      }
    );
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("acessToken");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
