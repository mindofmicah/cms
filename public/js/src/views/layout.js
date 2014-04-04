define(['backbone', 'modules/navigation/views/navigation', 'modules/navigation/collections/nav_links'], function (Backbone, NavigationView, NavCollection) {
    'use strict';
    return Backbone.View.extend({
        navbar: null,
        content: null,
        initialize : function () {
            this.navbar = new NavigationView({el:$('nav').eq(0),collection: new NavCollection([{href:'#',label:'Link1'},{href:'#',label:'Link number dos'},{href:'#',label:'And ANOTHER thing'},{href:'#',label:'Blah', active:true}])});

            this.render();
        },
        render : function () {
            this.navbar.render();
//            this.$el.html(this.navbar.render().$el);
            return this;
        }
    });
});
