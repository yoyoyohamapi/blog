/**
 * User.js
 *
 * @description :: 用户模型
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var bcrypt = require('bcrypt');
module.exports = {
    attributes: {
        // 站点名称
        siteName: {
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 10
        },
        // 邮箱
        email: {
            type: 'email',
            unique: true,
            required: true
        },
        // 密码
        password: {
            type: 'string',
            required: true
        },
        // 站点简介
        siteDesc: {
            type: 'string',
            defaultsTo: '暂无简介',
            maxLength: 50
        },
        // 是否管理员（默认为非管理员）
        isAdmin: {
            type: 'boolean',
            defaultsTo: false
        }
    },

    // 创建（注册）用户前，对用户密码加盐加密
    beforeCreate: function (values, cb) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(values.password, salt, function (err, hash) {
                if (err) return cb(err);
                values.password = hash;
                // 执行用户定义回调
                cb();
            });
        });
    }
};

