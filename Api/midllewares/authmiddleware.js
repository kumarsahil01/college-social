const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  
   const token= req.cookies.acessToken;

  // console.log("this is the token", token);

  // Check if the token exists
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify and decode the token
    console.log("this is the  we are trying to verify");
    const decoded = jwt.verify(token,  process.env.JWT_SECRET);
    console.log(" this is decoded", decoded);
    // Add the decoded token data to the request object
    req.userId = decoded.user.id;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
