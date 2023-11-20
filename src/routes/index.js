const express = require("express");
const route = express.Router();

const userRoute = require("./user_route");
const todoRoute = require("./todo_route");
const authRoute = require("./auth_route");

route.get("/", (req, res) => {
  res.json("ini dari express mongoose");
});

route.use("/auth", authRoute);
route.use("/users", userRoute);
route.use("/todos", todoRoute);
// route.use("/user", userRoute);

module.exports = route;
