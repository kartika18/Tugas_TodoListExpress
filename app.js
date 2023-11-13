const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const allRoutes = require("./routes");
const db_connect = require("./config/db");

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
