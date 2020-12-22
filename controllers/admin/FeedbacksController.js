var Request = require("request");
var Feedbacks = require.main.require('./models/Feedbacks');
const controller = 'Feedbacks';
const module_name = 'Feedbacks';


/**
 *  list
 *  Purpose: This function is used to show listing of all videos
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
*/
async function list(req, res) {

    res.set('content-type' , 'text/html; charset=mycharset');
    data = {};
    action = 'list';
    const allRecord = await Feedbacks.find({})
        .sort({ createdAt: -1 })
        .exec();
    res.render('admin/Feedbacks/list',{
        page_title:" List",
        data:allRecord,
        controller:controller,
        action:action,
        module_name:module_name
    });
};
exports.list = list;
