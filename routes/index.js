const express = require("express");
const route = express.Router();

const userRoute = require("./user_route");

route.get("/", (req, res) => {
  res.json("ini dari express mongoose");
});
route.use("/users", userRoute);
// route.use("/user", userRoute);
// route.use("/user", userRoute);

module.exports = route;
