const BookModel = require("../db/models/book.model");

module.exports = {
  addBook: async (req, res) => {
    try {
      const { title, desc, author, pages } = req.body;
      console.log(req.file);
      const _book = new BookModel({
        // cover: coverImg,
        title: title,
        desc: desc,
        author: author,
        pages: pages,
        createdBy: req.user,
      });
      await _book
        .save()
        .then((result) => {
          res.status(200).json({
            status: 1,
            message: "Book Added!",
            result,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({
            status: 0,
            message: err.message,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: 0,
        message: error.message,
      });
    }
  },

  getBooks: async (req, res) => {
    try {
      await BookModel.find()
        .populate("createdBy")
        .exec()
        .then((result) => {
          res.status(200).json({
            status: 1,
            result,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({
            status: 0,
            message: err.message,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: 0,
        message: error.message,
      });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      await BookModel.findByIdAndDelete({ _id: id }).exec((err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json({
            status: 0,
            message: err.message,
          });
        }
        res.status(200).json({
          status: 1,
          message: "Book Deleted!",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: 0,
        message: error.message,
      });
    }
  },
};
