const multer = require("multer");

const VIDEO_UPLOAD_BASE_URL = __basedir + "/uploads/videos/";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, VIDEO_UPLOAD_BASE_URL);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
