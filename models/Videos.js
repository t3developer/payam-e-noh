const mongoose = require('mongoose');
const VideoSchema = mongoose.Schema({
    name : String,
    path : String,
    title: String,
    sub_title: String,
    thumbnail: String,
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    category_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    is_active  : String,
    created_at   : String,
    updated_at  : String,
    filter_content_id: String,
    filter_content_status: String,
    filter_content_result: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Videos', VideoSchema);
