const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
    title: String,
    sub_title: String,
    description: String,
    image: String,
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
    updated_at  : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Articles', ArticleSchema);
