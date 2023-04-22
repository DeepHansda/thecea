const cloudinary = require("cloudinary").v2;

dotenv.config();
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUploads = async (filePath, folder) => {
  return cloudinary.uploader
    .upload(filePath, { folder: folder })
    .then((result) => {
      return {
        message: "upload successful",
        public_id: result.public_id,
        url: result.url,
      };
    })
    .catch((error) => {
      return {
        message: "upload failed",
        error: error,
      };
    });
};

module.exports = { cloudinaryUploads };
