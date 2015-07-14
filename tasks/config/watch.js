/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function (grunt) {

    grunt.config.set('watch', {
        options: {
            livereload: true
        },
        api: {

            // API files to watch:
            files: ['api/**/*', '!**/node_modules/**']
        },
        assets: {

            // Assets to watch:
            files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

            // When assets are changed:
            tasks: ['syncAssets', 'linkAssets']
        },
        compass: {
            files: ['assets/sass/{,*/}*.scss'],
            tasks: ['compass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
