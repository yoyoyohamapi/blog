/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/


    //----------------Aticles
    // 默认显示全部文章
    '/': 'ArticleController.index',
    // 显示某篇文章
    'get /article/show/:id': 'ArticleController.show',
    // 跳转到创建文章页
    'get /article/new': 'ArticleController.new',
    // 跳转到编辑文章页
    'get /article/edit/:id': 'ArticleController.edit',

    // 显示分类下的全部文章
    '/category/:id/articles/:page': 'CategoryController.getArticles',

    // 显示标签下的全部文章
    '/tag/:name/articles/:page': 'TagsController.getArticles',

    //---------------Login & Register
    // 跳转到注册页面
    'get /register': 'AuthController.toRegister',
    // 处理注册逻辑
    'post /register': 'AuthController.processRegister',
    // 跳转到登陆页
    'get /login': {
        view: 'passport/login'
    },
    // 处理登陆逻辑
    'post /login': 'AuthController.processLogin',
    // 登出逻辑
    '/logout': 'AuthController.logout',

    //---------------User Profile
    '/user/profile': 'UserController.index',

    '/user/profile/avatar': 'UserController.setAvatar',



};
