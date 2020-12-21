const SIGHTENGINE_API_USER = '1405826725';
const SIGHTENGINE_API_SECRET = 'FiaM2QYGF9rKTSbmmviR';

const Videos = require('../models/Videos');
const Categories = require('../models/Categories');
const http = require('http'),
    fs = require('fs'),
    util = require('util');
const sightengine = require('sightengine')(SIGHTENGINE_API_USER, SIGHTENGINE_API_SECRET);
const pusher = require('../config/pusher');

const VIDEO_UPLOAD_DIR = "/uploads/videos/";
const VIDEO_UPLOAD_BASE_URL = __basedir + VIDEO_UPLOAD_DIR;

// file uploading with express-fileupload
const upload = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    let file = req.files.file;
    const videoPath = VIDEO_UPLOAD_BASE_URL + file.name;

    await file.mv(videoPath, function (err) {
      if (err) {
        res.status(500).send({
          error: "File uploading failed. Server error!"
        });
      }
    });

    let video = {};
    video.name = file.name;
    video.user_id = req.body.user_id;
    video.category_id = req.body.category_id;
    video.path = VIDEO_UPLOAD_DIR + file.name;
    video.is_active = 0;
    video.thumbnail = req.body.image_thumbnail;
    video.filter_content_status = "Pending";
    video.title = req.body.title;

    const videoRecord = new Videos(video);
    const saveResult = await videoRecord.save();
    const savedVideoRecord = await Videos.findOne({_id: saveResult._id})
        .populate('user_id')
        .populate('category_id');
    const dataToSend = {
      user: savedVideoRecord.user_id.name,
      category: savedVideoRecord.category_id.name
    };

    filterVideoContent(saveResult);

    if (saveResult) {
      await pusher.trigger('notifications', 'video_add', dataToSend, req.headers['x-socket-id']);
      res.status(200).send(saveResult);
    } else {
      res.status(400).send({
        error: "File uploading failed. Server error!"
      });
    }

  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: "File uploading failed. Server error!"
    });
  }
};

const filterVideoContent = (video) => {
  sightengine.check(['nudity','wad']).video_sync("https://6b971e391f58.ngrok.io"+video.path).then(async function(result) {
    if (result.status === "success") {
      const videoFinalScore = await calculateVideoScore(result);

      const set = {
        filter_content_id: result.request.id,
        filter_content_status: "Success",
        filter_content_result: videoFinalScore
      }
      await Videos.findByIdAndUpdate(video._id, {$set: set});
    } else {
      const set = {
        filter_content_status: "Error"
      }
      await Videos.findByIdAndUpdate(video._id, {$set: set});
    }
  }).catch(async function(err) {
    const set = {
      filter_content_status: "Error"
    }
    await Videos.findByIdAndUpdate(video._id, {$set: set});
  });
};

const calculateVideoScore = (videoResult) => {
  const frames = videoResult.data.frames;
  let weaponArr = [], alcoholArr = [], drugsArr = [], nuditySafeArr = [], nudityRawArr = [], nudityPartialArr = [];
  let weapon, alcohol, drugs, nuditySafe, nudityRaw, nudityPartial;

  frames.forEach(frame => {
    weaponArr.push(frame.weapon);
    alcoholArr.push(frame.alcohol);
    drugsArr.push(frame.drugs);
    nuditySafeArr.push(frame.nudity.safe);
    nudityRawArr.push(frame.nudity.raw);
    nudityPartialArr.push(frame.nudity.partial);
  });

  weapon = calculateMean(weaponArr);
  alcohol = calculateMean(alcoholArr);
  drugs = calculateMean(drugsArr);
  nuditySafe = calculateMean(nuditySafeArr);
  nudityRaw = calculateMean(nudityRawArr);
  nudityPartial = calculateMean(nudityPartialArr);

  return {
    weapon: getScoreLabel(weapon),
    alcohol: getScoreLabel(alcohol),
    drugs: getScoreLabel(drugs),
    nudity_raw: getScoreLabel(nudityRaw),
    nudity_partial: getScoreLabel(nudityPartial)
  }
}

const getNudityLabel = (raw, partial, safe) => {
  if ((raw < Math.max(partial, safe)) && (partial < Math.max(raw, safe))) {
    return "UNLIKELY";
  } else {
    return "LIKELY";
  }
}

const getScoreLabel = (score) => {
  if(score < 0.2) {
    return "UNLIKELY";
  } else if (score >= 0.2 && score < 0.5) {
    return "POSSIBLE";
  } else if (score >= 0.5 && score < 0.9) {
    return "LIKELY";
  } else if (score >= 0.9) {
    return "VERY_LIKELY";
  } else {
      return "UNKNOWN";
  }
}

const calculateMean = (numbers) => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;
  return parseFloat(avg.toFixed(3));
}

const calculateMedian = (numbers) => {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

const setVideoContentResult = async (req, res) => {
  console.log(JSON.stringify(req.body));
};

const getUserVideos = async (req, res) => {
  try {
    console.log(req.query.user_id);
    const allRecords =  await Videos.find({
      user_id: JSON.parse(req.query.user_id),
    }).sort({ createdAt: -1 }).exec();
    res.status(200).send(allRecords);
  } catch (err) {
    res.status(400).send({
      error: "Couldn't get videos. Server error!"
    });
  }
};

// File uploading with multer
// const upload = async (req, res) => {
//     try {
//       console.log(req.file);
//
//       if (req.file === undefined) {
//         return res.status(400).send({
//           error: "Please upload a file!"
//         });
//       }
//
//       let video = {};
//       video.name = req.file.filename;
//       video.user_id = req.body.user_id;
//       video.category_id = req.body.category_id;
//       video.path = req.file.path;
//       video.is_active  = 0;
//       const videoRecord = new Videos(video);
//       const saveResult = await videoRecord.save();
//
//       if (saveResult) {
//         res.status(200).send({
//           success: "Uploaded the file successfully: " + saveResult,
//         });
//       } else {
//         res.send(400).send({
//           error: "File uploading failed. Server error!"
//         });
//       }
//
//     }catch(err) {
//       res.send(400).send({
//         error: "File uploading failed. Server error!"
//       });
//     }
// };

async function getListFiles  (req, res) {
  // const directoryPath = __basedir + "/uploads/videos/";
  let date = new Date();
  let currentHours = date.getHours();
  currentHours = ("0" + currentHours).slice(-2);
  let currentMins = date.getMinutes();
  currentMins = ("0" + currentMins).slice(-2);
  let start_time = currentHours + ':' + currentMins;
  let end_time_hours = (parseInt(currentHours) + parseInt(6));
  let end_time = ("0" + end_time_hours).slice(-2) + ':' + currentMins;
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
}

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
  setVideoContentResult,
  getUserVideos
};
