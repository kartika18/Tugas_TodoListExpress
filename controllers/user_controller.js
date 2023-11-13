const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      message: "Success get all data user",
      data: users,
    });
  },

  getUserById: (req, res) => {},

  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.status(201).json({
      message: "Success create data user",
    });
  },
};
