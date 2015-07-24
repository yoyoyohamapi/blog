/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// 文章查询顺序：以更新时间逆序
FIND_ORDER = 'updatedAt desc';
// 文章每页条目数
FIND_PER_PAGE = 2;

module.exports = {

    /**
     * 首页显示文章
     * @param req
     * @param res
     */
    index: function (req, res) {
        // 获得当前需要加载第几页
        var page = req.param('page') ? req.param('page') : 1;
        // 如果是第1页，则需要加载分类以及标签
        if (page == 1) {
            Article.find({
                sort: FIND_ORDER,
            }).paginate({page: page, limit: FIND_PER_PAGE})
                .populate('category').then(function (articles) {
                    // 每篇文章转换
                    // 查找分类,及标签
                    return [
                        articles,
                        Category.find(),
                        Tags.find()
                    ];
                })
                .spread(function (articles, categories, tags) {
                    return res.view(
                        'article/index',
                        {
                            articles: articles,
                            categories: categories,
                            tags: tags,
                            page: page
                        });
                });
        } else {
            Article.find({
                sort: FIND_ORDER,
            }).paginate({page: page, limit: FIND_PER_PAGE})
                .populate('category').exec(function (err, articles) {
                    if (!err) {
                        // 刷新下一页
                        return res.view(
                            'article/_article',
                            {
                                articles: articles,
                                page: page
                            });
                    }
                    else {
                        console.log(err);
                    }
                });
        }

    },

    // 显示某篇文章
    show: function (req, res) {
        var id = req.param('id');
        Article.findOne(id).populate('category').
            exec(function (err, article) {
                if (err) {
                    res.notFound();
                } else {
                    res.view('article/show', {
                        articles: [article]
                    });
                }
            });
    },

    // 跳至创建文章
    new: function (req, res) {
        //获取分类
        Category.find().exec(function (err, categories) {
            if (!err) {
                return res.view(
                    'article/save',
                    {
                        categories: categories,
                        form: {action: '/article/create', method: 'POST'}
                    }
                )
            }
        });

    },

    // 跳至修改文章:
    edit: function (req, res) {
        //获取文章
        var id = req.param('id');
        Article.findOne(id).populate('category')
            .then(function (article) {
                return [article, Category.find()];
            })
            .spread(function (article, categories) {
                res.view(
                    'article/save',
                    {
                        article: article,
                        categories: categories,
                        form: {action: '/article/' + id, method: 'PUT'}
                    }
                );
            })
            .catch(function (err) {
                res.notFound();
            });
    }

};

