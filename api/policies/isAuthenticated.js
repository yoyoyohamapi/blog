/**
 * 用户是否被授权
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
};