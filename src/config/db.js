const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/todoList_db";

const db_connect = mongoose.connect(DB_URL);

module.exports = db_connect;
