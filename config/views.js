module.exports.views = {
    engine: {
        /* Template File Extension */
        ext: 'swig',

        /* Function to handle render request */
        fn: function (path, data, cb) {
            /* Swig Renderer */
            var swig = require('swig');
            // 保证我们在开发环境下每次更改swig不用重启sails
            if (data.settings.env === 'development') {
                swig.setDefaults({cache: false});
            }
            /*
             * Bind public paths
             * Thanks to: https://github.com/mahdaen/sails-views-swig
             * */
            var paths = {
                script: '/js',
                style: '/styles/default',
                image: '/images',
                font: '/fonts',
                icon: '/icons',
                bower: '/bower_components'
            };

            if (!data.path) {
                data.path = paths;
            }
            else {
                for (var key in paths) {
                    if (!key in data.path) {
                        data.path[key] = paths[key];
                    }
                }
            }
            /* Render Templates */
            return swig.renderFile(path, data, cb);
        }
    },

    layout: 'layout',

    partials: false

};