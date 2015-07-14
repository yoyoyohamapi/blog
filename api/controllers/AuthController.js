/**
 * 验证逻辑控制器
 * */
var passport = require('passport');
module.exports = {
    /**
     * 处理注册逻辑
     * @param req
     * @param res
     */
    processRegister: function (req, res) {
        // 由请求参数构造待创建User对象
        var user = req.allParams();
        User.create(user).exec(function createCB(err, created) {
            if (err) {
                // 如果有误，返回错误
                res.view('passport/register', {err: err});
            } else {
                // 否则，将新创建的用户登录
                req.login(created, function (err) {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/');
                });
            }
        });
    },
    /**
     * 处理登陆逻辑
     * @param req
     * @param res
     */
    processLogin: function (req, res) {
        // 使用本地验证策略对登录进行验证
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                return res.view('passport/login', {err: info.message});
            }
            req.logIn(user, function (err) {
                if (err) res.view('passport/login', {err: err});
                return res.redirect('/');
            });

        })(req, res);
    },
    /**
     * 处理登出逻辑
     * @param req
     * @param res
     */
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    }
};