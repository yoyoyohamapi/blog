/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
    // 启动时刷新站点信息
    User.find().exec(function (err, users) {
        if (users.length > 0) {
            var user = users[0];
            sails.config.site.name = user.siteName;
            sails.config.site.desc = user.siteDesc;
        }
        cb();
    });
};
