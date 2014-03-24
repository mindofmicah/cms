define(['underscore', 'backbone', 'views/layout', 'router'], function (_, Backbone, LayoutView, Router) {
    'use strict';

    return {
        pub_sub : _.extend(Backbone.Events),
        layout:    new LayoutView(),
        router:    new Router()
    };
});
