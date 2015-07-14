/**
 * 指定Compass配置文件，完成sass编译
 */
module.exports = function (grunt) {
    grunt.config.set('compass', {
        dist: {
            options: {
                config: 'assets/config.rb',
                // 重要，如果不声明assets，compass无法找到待编译的scss文件
                basePath: 'assets'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

}