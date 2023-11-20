require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error("invalid header");

    const token = header.split(" ")[1];
    if (!token) throw new Error("there's no token");

    const userToken = jwt.verify(token, process.env.JWT_KEY);
    req.userToken = user;

    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = verifyToken;
