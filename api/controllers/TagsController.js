/**
 * TagsController
 *
 * @description :: Server-side logic for managing tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// 文章查询顺序：以更新时间逆序
FIND_ORDER = 'createdAt desc';
// 文章每页条目数
FIND_PER_PAGE = 2;

module.exports = {
    getArticles: function (req, res) {
        var name = req.param('name');
        var page = req.param('page') ? req.param('page') : 1;
        // 获得对应分类的所有文章
        // 获得总页数
        Tags.findOne(name)
            .then(function (tag) {
                return [
                    page,
                    Article.find({
                        where: {
                            tags: {contains: name}
                        },
                        sort: FIND_ORDER,
                        select: ['id', 'title', 'createdAt']
                    }).paginate({page: page, limit: FIND_PER_PAGE}),
                    tag
                ];
            })
            .spread(function (page, articles, tag) {
                res.view(
                    'tags/index',
                    {
                        count: Math.ceil(tag.value / FIND_PER_PAGE),
                        page: page,
                        articles: articles,
                        tag: tag
                    }
                );
            })
            .catch(function (err) {
                res.badRequest();
            });
    }
};

