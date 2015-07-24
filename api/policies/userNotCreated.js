/**
 * 用户尚未创建
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = function (req, res, next) {
    // 检查数据库中是否已经有用户
    User.find().exec(function (err, users) {
        if (users.length) {
            res.redirect('/');
        } else {
            next();
        }
    });
};