module.exports = function (grunt) {
    grunt.registerTask('compileAssets', [
        'clean:dev',
        'jst:dev',
        'compass',
        'copy:dev',
        'coffee:dev'
    ]);
};
