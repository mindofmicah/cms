define(['underscore', 'backbone', 'views/layout', 'router'], function (_, Backbone, LayoutView, Router) {
    'use strict';

    var app = {
            pub_sub : _.extend(Backbone.Events),
            layout:    new LayoutView({el:$('.container').eq(0)})
        };
    // Add the router with a pointer back to itself
    app.router = new Router({app: app});

    return app;
});
