define(['backbone', 'app'], function (Backbone, AppView) {
    "use strict";
    return Backbone.Router.extend({
        app : null,
        initialize : function (params) {
            params = params || {};
            this.app = params.app || new AppView();
        },
        routes: {
            '' : 'home'
        },
        home : function () {
            this.app.showHome();
        }    
    });
});

