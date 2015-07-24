// 第三方模块声明
require.config({
    baseUrl: '/bower_components/',
    paths: {
        jquery: 'jquery/dist/jquery',
        requirejs: 'requirejs/require',
        'semantic-ui': 'semantic-ui/dist/semantic',
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone',
        'semantic-form': 'semantic-ui/dist/components/form.min',
        'semantic-dropdown': 'semantic-ui/dist/components/dropdown.min',
        'semantic-transition': 'semantic-ui/dist/components/transition.min',
        'semantic-modal': 'semantic-ui/dist/components/modal.min',
        'semantic-dimmer': 'semantic-ui/dist/components/dimmer.min',
        'semantic-popup': 'semantic-ui/dist/components/popup.min',
        marked: 'marked/lib/marked',
        highlightjs: 'highlightjs/highlight.pack',
        'load-image': 'blueimp-load-image/js/load-image',
        'load-image-ios': 'blueimp-load-image/js/load-image-ios',
        'load-image-orientation': 'blueimp-load-image/js/load-image-orientation',
        'load-image-meta': 'blueimp-load-image/js/load-image-meta',
        'load-image-exif': 'blueimp-load-image/js/load-image-exif',
        'load-image-exif-map': 'blueimp-load-image/js/load-image-exif-map'
    },
    packages: [],
    shim: {
        highlightjs: {
            exports: 'hljs'
        },
        prism: {
            exports: 'Prism'
        }
    }
});
// 加载app，并运行
require(['/js/common/app.js'], function (app) {
    app.init();
});