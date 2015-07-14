/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function (grunt) {

    grunt.config.set('uglify', {

        dist: {

            src: ['.tmp/public/concat/production.js'],
            dest: '.tmp/public/min/production.min.js'
        },
        // 压缩各个自定义模块js
        modules: {
            files: [{
                expand: true,
                cwd: '.tmp/public/js',
                src: '**/*.js',
                dest: '.tmp/public/js'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
