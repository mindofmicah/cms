define(['backbone'], function (Backbone) {
    "use strict";
    return Backbone.Router.extend({
        app : null,
        initialize : function (params) {
            params = params || {};
            this.app = params.app || new Backbone.View();
        },
        routes: {
            '' : 'home'
        },
        home : function () {
            if (this.app.showHome) {
                this.app.showHome();
            }
        }
        
    });
});

