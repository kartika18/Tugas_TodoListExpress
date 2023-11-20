require("dotenv").config();

const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const db_connect = mongoose.connect(DB_URL);

module.exports = db_connect;
