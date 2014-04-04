define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.View.extend({
        tagName: 'li',
        render : function () {
            this.$el.html([
                '<a href="' + this.model.get('href') + '">' +
                    this.model.get('label') +
                '</a>'
            ].join(''));

            if (this.model.get('active')) {
                this.$el.addClass('active');
            }
            return this;
        } 
    });
});
