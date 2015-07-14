define(['jquery', 'underscore', 'backbone', '/js/' + app.action + '.js'], function ($, _, Backbone, module) {
    return {
        init: function () {
            module.run();
        }
    }
});