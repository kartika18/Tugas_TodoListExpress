const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find().populate("user_id", ["_id", "name"]);

    res.status(200).json({
      message: "Success get all data todo",
      data: todos,
    });
  },

  getTodoById: (req, res) => {
    const { id } = req.params;
    const todos = Todo.find((todos) => todos.id == id);

    res.status(200).json({
      message: "Success get data todo by id",
      data: todos,
    });
  },

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);

    res.status(201).json({
      message: "Success create data todo",
    });
  },
};
