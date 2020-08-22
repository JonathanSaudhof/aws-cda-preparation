const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    author: String,
    done: Boolean,
    content: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
