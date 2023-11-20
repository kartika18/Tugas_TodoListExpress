const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
} = require("../controllers/todo_controller");
const verifyToken = require("../middleware/auth");

const route = express.Router();

route.get("/", verifyToken, getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);

module.exports = route;
