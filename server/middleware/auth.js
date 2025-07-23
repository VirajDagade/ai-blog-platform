import jwt from "jsonwebtoken";

// Auth middleware to protect routes
const auth = (req, res, next) => {
  // Get token from the request header (Authorization: <token>)
  const token = req.headers.authorization;

  try {
    // Verify the token using your secret key from .env file
    jwt.verify(token, process.env.JWT_SECRET);

    // If token is valid, continue to the next middleware/route
    next();
  } catch (error) {
    // If token is invalid or missing, respond with an error message
    res.json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default auth;
