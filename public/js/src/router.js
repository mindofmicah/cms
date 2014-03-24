define(['backbone', 'app'], function (Backbone, App) {
    "use strict";

    return Backbone.Router.extend({
        app : null,
        initialize : function (opts) {
            opts = opts || {};

            if (opts.app) {
                this.app = opts.app;
            }
        },
        routes: {
            '' : 'home'
        },
        home : function () {

        }    
    });
});

