/**
 * Category.js
 *
 * @description :: 分类
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true,
            unique: true
        }
    }
};

