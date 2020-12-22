const mongoose = require('mongoose');
const FeedbackSchema = mongoose.Schema({
    name : String,
    subject  : String,
    email: String,
    phone: String,
    message: String,
    created_at   : String,
    updated_at  : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedbacks', FeedbackSchema);
