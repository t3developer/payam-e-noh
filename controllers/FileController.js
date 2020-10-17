const Videos = require('../models/Videos');
var Categories = require('../models/Categories');
var http = require('http'),
    fs = require('fs'),
    util = require('util');

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

async function getListFiles  (req, res) {
  // const directoryPath = __basedir + "/uploads/videos/";
  var date = new Date();
  currentHours = date.getHours();
  currentHours = ("0" + currentHours).slice(-2);
  currentMins = date.getMinutes();
  currentMins = ("0" + currentMins).slice(-2);
  var start_time = currentHours + ':' + currentMins;
  var end_time_hours = (parseInt(currentHours) + parseInt(6));
  var end_time = ("0" + end_time_hours).slice(-2) + ':' + currentMins;
  console.log(start_time);
  console.log(end_time);
  const cats = await Categories.aggregate([
    {
      $match: {
          start_time: {
            $gte: start_time
          },
          end_time: {
            $lt: end_time
          },
      }
    }
  ]);
  console.log(cats[0]._id);
  const allRecord =  await Videos.find({
    is_active: 1,
    category_id : cats[0]._id
  });
  res.status(200).send(allRecord);
};

var serverFunction = function (req, res) {
  // var path = req.params.name;
  // var stat = fs.statSync(path);
  // var total = stat.size;
  // if (req.headers['range']) {
  //   var range = req.headers.range;
  //   var parts = range.replace(/bytes=/, "").split("-");
  //   var partialstart = parts[0];
  //   var partialend = parts[1];
  //
  //   var start = parseInt(partialstart, 10);
  //   var end = partialend ? parseInt(partialend, 10) : total-1;
  //   var chunksize = (end-start)+1;
  //   console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);
  //
  //   var file = fs.createReadStream(path, {start: start, end: end});
  //   res.writeHead(206, {
  //       'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
  //       'Accept-Ranges': 'bytes',
  //       'Content-Length': chunksize,
  //       'Content-Type': 'video/mp4'
  //   });
  //   file.pipe(res);
  // } else {
  //   console.log('ALL: ' + total);
  //   res.writeHead(200, {
  //       'Content-Length': total,
  //       'Content-Type': 'video/mp4'
  //   });
  //   fs.createReadStream(path).pipe(res);
  // }
}

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
