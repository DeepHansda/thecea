const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema(
  {
    cover: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    pages: {
      type: Number,
      require: true,
    },
    createdBy: {
      _id: Types.ObjectId,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = model("book", bookSchema);
