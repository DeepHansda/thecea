const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();





const storage = multer.diskStorage({

  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/webp") {
    cb(null, true);
  } else {
    cb({ message: "file format not supported" }, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });



module.exports = {
  upload: upload,
  cloudinaryUploads: cloudinaryUploads,
};
