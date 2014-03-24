define(['backbone', 'app', 'views/layout', 'router'], function (Backbone, App, LayoutView, AppRouter) {
    'use strict';
    
    describe('App', function () {
        it('should exist', function () {
            expect(App).toBeDefined(); 
        });

        describe('App.Layout', function () {
            it('should exist', function () {
                expect(App.layout).toBeDefined();
            });
            it('should be a layout view', function () {
                expect(App.layout instanceof LayoutView).toBe(true);
            });
        });
        describe('App.Router', function () {
            it('should exist', function () {
                expect(App.router).toBeDefined();
            });
            it('should be a Backbone Router', function () {
                expect(App.router instanceof AppRouter).toBe(true);
            });
        });
        describe('PubSub', function () {
            it('should exist', function () {
                expect(App.pub_sub).toBeDefined();
            });
            it('should be an Event system', function () {
                expect(typeof App.pub_sub === 'object').toEqual(true);
                expect(App.pub_sub.on).toBeDefined();
                expect(typeof App.pub_sub.on === 'function').toBe(true);
                expect(App.pub_sub.trigger).toBeDefined();
                expect(typeof App.pub_sub.trigger === 'function').toBe(true);
            });
        });
    });
});
