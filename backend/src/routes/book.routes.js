const express = require("express");
const {
  addBook,
  getBooks,
  deleteBook,
} = require("../controllers/book.controller");
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/imagesHandler");
const router = new express.Router();
router.post("/addBook", auth, upload.single('cover'), addBook);
router.get("/getBooks", getBooks);
router.delete("deleteBook/:id", auth, deleteBook);

module.exports = router;
