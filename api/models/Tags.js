/**
 * Tags.js
 *
 * @description :: 标签模型
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'string',
            required: true,
            unique: true
        },

        value: {
            type: 'integer',
            required: true
        }
    }
};

