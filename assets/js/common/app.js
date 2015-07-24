define(['jquery', 'underscore', 'backbone',
        '/js/' + app.action + '.js',
        'semantic-transition'
    ],
    function ($, _, Backbone, module) {
    return {
        init: function () {
            module.run();
        }
    }
});