const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
} = require("../controllers/user_controller");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.get("/", createUser);

module.exports = route;
