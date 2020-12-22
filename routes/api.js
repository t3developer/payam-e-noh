var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");
const AuthController  = require('../controllers/auth/AuthController');
const RegisterController  = require('../controllers/auth/RegisterController');
const ArticleController = require('../controllers/ArticleController');
const FeedbackController = require('../controllers/FeedbackController');
const Categories   = require('../controllers/admin/CategoriesController');

const Home          = require('../controllers/HomeController');
const Filecontroller = require('../controllers/FileController');
/** Routes for Mobile API  */
router.get('/v1', (req, res) => {
  res.send('welcome to user api');
});
router.post('/v1/login', AuthController.login);
router.post('/v1/register', RegisterController.store);
router.post('/v1/update-profile', RegisterController.update);
router.post('/v1/upload-video', Home.display_videos);
router.get('/v1/get-categories', Categories.listapi);

router.post("/v1/upload", Filecontroller.upload);
router.get("/v1/active_videos", Filecontroller.getCurrentVideos);
router.get("/v1/files/:name", Filecontroller.download);
router.post("/v1/filter-video-result", Filecontroller.setVideoContentResult);
router.get("/v1/user_videos", Filecontroller.getUserVideos);
router.get("/v1/category_videos", Filecontroller.getCategoryVideos);

router.post("/v1/add-article", ArticleController.add);
router.get("/v1/user_articles", ArticleController.getUserArticles);
router.get("/v1/active_articles", ArticleController.getCurrentArticles);
router.get("/v1/latest_articles", ArticleController.getLatestArticles);
router.get("/v1/category_articles", ArticleController.getCateogryArticles);

router.post("/v1/add-feedback", FeedbackController.add);
router.get("/v1/list-feedback", FeedbackController.list);



module.exports = router;
