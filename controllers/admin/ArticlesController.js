var Request = require("request");
var Articles = require.main.require('./models/Articles');
const controller = 'Articles';
const module_name = 'Articles';


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
    const allRecord = await Articles.find({})
        .populate('user_id')
        .populate('category_id')
        .sort({ createdAt: -1 })
        .exec();
    res.render('admin/Articles/list',{
        page_title:" List",
        data:allRecord,
        controller:controller,
        action:action,
        module_name:module_name
    });
};
exports.list = list;

/**
 *  list
 *  Purpose: This function is used to show listing of all videos
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
 */
async function listLatest() {
    const allRecord = await Articles.find().sort({ createdAt: -1 }).limit(4)
        .populate('user_id')
        .populate('category_id')
        .exec();

    return allRecord;
};
exports.listLatest = listLatest;

/**
 *  Edit
 *  Purpose: This function is used to get constructor List
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
*/
async function edit(req, res) {

    res.set('content-type' , 'text/html; charset=mycharset');
    var action = 'edit';
    var entityDetail = {};
    var errorData = {};
    if(req.params.id){
        var id =  req.params.id;
        const entityDetail = await Articles.findById({_id:id});
        if(entityDetail == 0){
            req.flash('error', 'Invalid url')
            return res.redirect(nodeAdminUrl+'/Videos/list');
        }
        if (req.method == "POST") {
            var input = JSON.parse(JSON.stringify(req.body));

            req.checkBody('is_active', 'Status is required').notEmpty();
            var errors = req.validationErrors();
            if(errors){
                if(errors.length > 0){
                    errors.forEach(function (errors1) {
                        var field1 = String(errors1.param);
                        var msg = errors1.msg;
                        errorData[field1] = msg;
                        entityDetail.field1 = req.field1;
                    });
                }
            }else{
                var msg =  controller+' updated successfully.';
                var saveResult = await Articles.findByIdAndUpdate(req.params.id, {$set: input});
                req.flash('success', msg)
                res.locals.message = req.flash();
                if(saveResult){
                    return res.redirect(nodeAdminUrl+'/'+controller+'/list');
                }
            }
        }
        res.render('admin/'+controller+'/edit',{page_title:" Edit",data:entityDetail,errorData:errorData,controller:controller,action:action});
    }else{
        req.flash('error', 'Invalid url.');
        return res.redirect(nodeAdminUrl+'/'+controller+'/list');
    }
};
exports.edit = edit;

/**
 *  Edit
 *  Purpose: This function is used to get constructor List
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
*/

/**
 *  delete
 *  Purpose: This function is used to get constructor delete
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
*/
async function deleteRecord(req, res) {

    var categoryDetail = {};
    if(req.params.id){
        categoryDetail = await Articles.findByIdAndRemove(req.params.id);
        if(categoryDetail){
            req.flash('error', 'Invalid url')
            return res.redirect(nodeAdminUrl+'/'+controller+'/list');
        }else{
            req.flash('success', 'Record deleted succesfully.');
            return res.redirect(nodeAdminUrl+'/'+controller+'/list');
        }
    }else{
        req.flash('error', 'Invalid url.');
        return res.redirect(nodeAdminUrl+'/'+controller+'/list');
    }
};
exports.deleteRecord = deleteRecord;
