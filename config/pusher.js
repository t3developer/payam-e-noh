const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1126671",
    key: "0dc130ea51354b36f1ce",
    secret: "9b9fbf7dbb0c3bea4921",
    cluster: "ap2",
    useTLS: true
});

module.exports = pusher;
