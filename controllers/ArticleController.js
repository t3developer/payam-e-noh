
const Articles = require('../models/Articles');
const pusher = require('../config/pusher');

const IMAGE_UPLOAD_DIR = "/uploads/images/";
const IMAGE_UPLOAD_BASE_URL = __basedir + IMAGE_UPLOAD_DIR;

const add = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No image was uploaded.');
        }

        let file = req.files.file;
        const imagePath = IMAGE_UPLOAD_BASE_URL + file.name;
        const serverUrl = req.protocol + '://' + req.get('host');
        const imageDownloadLink = serverUrl + IMAGE_UPLOAD_DIR + file.name;

        await file.mv(imagePath, function (err) {
            if (err) {
                res.status(500).send({
                    error: "Image uploading failed. Server error!"
                });
            }
        });

        let article = {};
        article.title = req.body.title;
        article.sub_title = req.body.sub_title;
        article.description = req.body.description;
        article.user_id = req.body.user_id;
        article.category_id = req.body.category_id;
        article.image = imageDownloadLink;
        article.is_active = 0;

        const articleRecord = new Articles(article);
        const saveResult = await articleRecord.save();
        const savedArticleRecord = await Articles.findOne({_id: saveResult._id})
            .populate('user_id')
            .populate('category_id');
        const dataToSend = {
            user: savedArticleRecord.user_id.name,
            category: savedArticleRecord.category_id.name
        };

        if (saveResult) {
            await pusher.trigger('notifications', 'article_add', dataToSend, req.headers['x-socket-id']);
            res.status(200).send(saveResult);
        } else {
            res.status(400).send({
                error: "Article uploading failed. Server error!"
            });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({
            error: "Article uploading failed. Server error!"
        });
    }
};

const getUserArticles = async (req, res) => {
    try {
        const allRecords =  await Articles.find({
            user_id: JSON.parse(req.query.user_id),
        }).sort({ createdAt: -1 }).exec();
        res.status(200).send(allRecords);
    } catch (err) {
        res.status(400).send({
            error: "Couldn't get articles. Server error!"
        });
    }
};

module.exports = {
    add,
    getUserArticles
};
