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
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = model("Book", bookSchema);
