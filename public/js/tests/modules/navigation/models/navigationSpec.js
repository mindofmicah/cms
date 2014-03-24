define(['backbone', 'modules/navigation/models/nav_link'], function (Backbone, NavModel) {
    'use strict';
    describe('Navigation Model', function () {
        it('should exist', function () {
            expect(NavModel).toBeDefined();
        });
        it('should be a Models View', function () {
            expect(new NavModel() instanceof Backbone.Model).toBe(true);
        });
    });
});
