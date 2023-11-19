const User = require("../models/user");
const Todo = require("../models/todo");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      message: "Success get all data user",
      data: users,
    });
  },

  getUserById: (req, res) => {},

  getUserTodos: async (req, res) => {
    const { id } = req.params;

    const todos = await Todo.find({ user_id: id });

    res.status(200).json({
      message: "Succes get Todos by id",
      data: todos,
    });
  },

  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.status(201).json({
      message: "Success create data user",
    });
  },
};
