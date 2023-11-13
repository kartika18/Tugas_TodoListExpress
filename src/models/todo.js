const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
