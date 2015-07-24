/**
 * Article.js
 *
 * @description :: 文章模型
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/**
 * 定义Article集合的map，reduce函数,统计标签
 */
var map = function () {
    // 分类依据组成为："用户ID:标签"
    this.tags.forEach(function (tag) {
        emit(tag, 1);
    });
};
var reduce = function (k, values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
};

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 40
        },
        content: {
            type: 'string',
            required: true,
            minLength: 1
        },
        tags: {
            type: 'array'
        },
        category: {
            model: 'category',
            required: true
        }
    },

    //文章验证前，重构标签
    beforeValidate: function (article, cb) {
        if (article.tags.length) {
            var rowTags = article.tags[0].split(" ");
            article.tags = [];
            // 去除空标签及重复标签
            for (var i = 0; i < rowTags.length; i++) {
                var tag = rowTags[i].replace(" ", "");
                if (tag.length > 0 && (article.tags.indexOf(tag) < 0)) {
                    article.tags.push(tag);
                }
            }
        }
        cb();
    },
    // 每次文章创建完成，更新标签统计
    afterCreate: function (article, cb) {
        this.updateTags();
        cb();
    },
    //custom
    updateTags: function () {
        Article.native(function (err, collection) {
            if (err) return res.serverError(err);
            collection.mapReduce(map, reduce, {out: "tags"});
        });
    }
};

