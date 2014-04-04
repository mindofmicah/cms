define([
    'jquery', 
    'backbone', 
    'modules/navigation/views/nav-link'
], function ($, Backbone, NavLinkView) {
    'use strict';

    return Backbone.View.extend({
        initialize : function () {
            this.ul = $('<ul class="nav nav-tabs">').appendTo(this.$el);
            this.render();
        },
        render : function () {
            var $ul = this.ul.empty();

            this.collection.each(function (model) {
                var view = new NavLinkView({
                        model: model
                    });
    
                $ul.append(view.render().$el);
            });
            return this;
        }
    });
});
