define(['backbone'], function (Backbone) {
    return Backbone.Router.extend({
        app : null,
        initialize : function () {
            this.app = new Backbone.View;
        },
        routes:{
            '' : 'home'
        },
        home : function () {
        
        }
        
    });
});

