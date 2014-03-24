define(['backbone', 'views/layout'], function (Backbone, LayoutView) {
    'use strict';
    describe('Layout View', function () {
        it('should exist', function () {
            expect(LayoutView).toBeDefined();
        });
        it('should be a Backbone View', function () {
            expect(new LayoutView() instanceof Backbone.View).toEqual(true);
        });
        describe('Sidebar', function () {
            it('should exist', function () {
                expect(new LayoutView().sidebar).toBeDefined();
            });
        });
        describe('Main Content', function () {
            it('should exist', function () {
                expect(new LayoutView().content).toBeDefined();
            });
        });
    });
});
