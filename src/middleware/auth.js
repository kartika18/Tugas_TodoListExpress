const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const header = req.header.authorizarion;
    if (!header) throw new Error("invalid header");

    const token = header.split(" ")[1];
    if (!token) throw new Error("there's no token");

    const userToken = jwt.verify(token, "d5dk348b2k");

    req.userToken = user;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = verifyToken;
