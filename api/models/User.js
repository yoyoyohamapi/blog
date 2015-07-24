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
            maxLength: 20
        }
    },

    // 创建（注册）用户前，对用户密码加密
    beforeCreate: function (values, cb) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(values.password, salt, function (err, hash) {
                if (err) return cb(err);
                values.password = hash;
                // 执行用户定义回调
                cb();
            });
        });
    },

    // 创建用户后，自动为之生成默认分类-"未分类"，并更新站点信息
    afterCreate: function (createdUser, cb) {
        var thisModal = this;
        Category.create({name: Category.getDefault(), creator: createdUser})
            .exec(function (err, category) {
                if (category) {
                    thisModal.updateSite(createdUser);
                    cb();
                }
            });
    },

    // 用户信息更新时，更新站点信息
    afterUpdate: function (user, cb) {
        this.updateSite(user);
        cb();
    },

    // 更新站点信息
    updateSite: function (user) {
        sails.config.site.name = user.siteName;
        sails.config.site.desc = user.siteDesc;
    }
};

