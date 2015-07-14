module.exports = function (grunt) {
    grunt.registerTask('prod', [
        'compileAssets',
        'concat',
        'uglify:dist',
        'uglify:modules', //压缩自定义模块
        'cssmin:dist',
        'cssmin:modules', // 压缩自定义css
        'sails-linker:prodJs',
        'sails-linker:prodStyles',
        'sails-linker:devTpl',
        'sails-linker:prodJsJade',
        'sails-linker:prodStylesJade',
        'sails-linker:devTplJade'
    ]);
};
