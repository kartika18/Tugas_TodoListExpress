require("dotenv/config");

const express = require("express");
const cors = require("cors");
const allRoutes = require("./routes");
const db_connect = require("./config/db");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

db_connect
  .then(() => {
    console.log("success connect to mongoDB");
  })
  .catch(() => {
    console.log("failed connect to mongoDB");
  });

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

module.exports = app;
