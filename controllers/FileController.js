const Videos = require('../models/Videos');

const upload = async (req, res) => {
    try {
      console.log(req.file);

      if (req.file === undefined) {
        return res.status(400).send({
          error: "Please upload a file!"
        });
      }

      let video = {};
      video.name = req.file.filename;
      video.user_id = req.body.user_id;
      video.category_id = req.body.category_id;
      video.path = req.file.path;
      video.is_active  = 0;
      const videoRecord = new Videos(video);
      const saveResult = await videoRecord.save();

      if (saveResult) {
        res.status(200).send({
          success: "Uploaded the file successfully: " + saveResult,
        });
      } else {
        res.send(400).send({
          error: "File uploading failed. Server error!"
        });
      }

    }catch(err) {
      res.send(400).send({
        error: "File uploading failed. Server error!"
      });
    }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};
