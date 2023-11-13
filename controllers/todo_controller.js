const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find();

    res.status(200).json({
      message: "Success get all data todo",
      data: todos,
    });
  },

  getTodoById: (req, res) => {},

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);

    res.status(201).json({
      message: "Success create data todo",
    });
  },
};
