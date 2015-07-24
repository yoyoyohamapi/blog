/**
 * Policy Mappings
 */
module.exports.policies = {


    // 默认所有行为需要登录
    // 若某些行为不需要，则在下面声明
    '*': 'isAuthenticated',

    // 验证逻辑都不需要登录
    // 用户创建后不再允许注册
    AuthController: {
        '*': true,
        toRegister: 'userNotCreated'
    },

    // 文章显示逻辑不需要登录
    ArticleController: {
        index: 'userCreated',
        show: 'userCreated'
    },

    CategoryController: {
        getArticles: true
    },

    TagsController: {
        getArticles: true
    }

};
