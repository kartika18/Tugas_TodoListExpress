const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  loginAuth: async (req, res) => {
    try {
      const userLoginInfo = req.body;

      const user = await User.findOne({ email: userLoginInfo.email });
      if (!user) throw new Error("Invalid User");

      // seharusnya pake bycrypt
      if (user.password !== userLoginInfo.password)
        throw new Error("Invalid Password");

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_KEY
      );

      res.json({
        message: "Login Successful",
        user_id: user._id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  registAuth: (req, res) => {},
};
