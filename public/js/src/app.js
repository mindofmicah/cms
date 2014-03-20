define(['backbone'], function (Backbone) {
    'use strict';
    return Backbone.View.extend({
        showHome: function () {
            this.$el.html('Hello World');
        }
    });
});
