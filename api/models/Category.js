/**
 * Category.js
 *
 * @description :: 分类
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
DEFAULT_NAME = "未分类";
module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true,
            unique: true
        }
    },

    // 获得默认分类名
    getDefault: function () {
        return DEFAULT_NAME;
    }
};

