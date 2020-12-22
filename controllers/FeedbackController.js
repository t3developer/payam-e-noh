const Feedbacks = require('../models/Feedbacks');

const add = async (req, res) => {
    try {
        let feedback = {};
        feedback.name = req.body.name;
        feedback.subject = req.body.subject;
        feedback.email = req.body.email;
        feedback.phone = req.body.phone;
        feedback.message = req.body.message;

        const feedbackRecord = new Feedbacks(feedback);
        const saveResult = await feedbackRecord.save();

        if (saveResult) {
            res.status(200).send(saveResult);
        } else {
            res.status(400).send({
                error: "Feedback uploading failed. Server error!"
            });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({
            error: "Feedback uploading failed. Server error!"
        });
    }
};

const list = async (req, res) => {
    try {
        const allRecords =  await Feedbacks.find()
            .sort({ createdAt: -1 })
            .exec();
        res.status(200).send(allRecords);
    } catch (err) {
        res.status(400).send({
            error: "Couldn't get articles. Server error!"
        });
    }
};

module.exports = {
    add,
    list
};
