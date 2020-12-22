require('dotenv').config();

var express = require('express');
global.app = express();
global.moment = require('moment');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');

// Required module
app.use(expressValidator());
// var corsOptions = {
//     origin: "*",
//     allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-reset-token', 'x-invite-token', 'x-api-key', 'x-www-form-urlencoded'],
//     credentials: true
// };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true
}));

global.connectPool = require('./config/db.js');

// Constants
//global.nodeSiteUrl = 'http://192.168.1.151/constructionApp/nodeApi/'; // node
global.__basedir = __dirname;
global.nodeSiteUrl = process.env.SERVER_URL || 'http://127.0.0.1:9800'; // node
global.nodeAdminUrl = global.nodeSiteUrl + '/admin'; // node
global.siteTitle = 'Payam-e-Noh Admin';
global.successStatus = 200;
global.failStatus = 401;
global.SessionExpireStatus = 500;
global.CURRENCY = '$';


/* Admin section code */
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.static(__dirname +'/public'));

var flash = require('express-flash-messages');
app.use(flash());

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app.use(cookieParser());
app.use(expressSession({secret: 'D%$*&^lk32', resave: false, saveUninitialized: true}));

// app.use(function (req, res, next) {
//     res.header('Content-Type', 'application/json');
//     next();
// });

var webRouter = require('./routes/web');
app.use('/', webRouter);

var apiRouter = require('./routes/api');
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client-new/build')));
    // Handle React routing, return all requests to React app
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'client-new/build', 'index.html'));
    });
}

const port = process.env.PORT || 9800;
var server = app.listen(port, function () {
    console.log("Example app listening at http://127.0.0.1:%s", port);
});
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
