define(['backbone', 'app'], function (Backbone, App) {
    'use strict';
    describe('The main App view', function () {
        it('should exist', function () {
            expect(App).toBeDefined();
        });
        it('should be a backbone view', function () {
            expect(new App() instanceof Backbone.View).toEqual(true);
        });

        describe('App.showHome', function () {
            it('should exist', function () {
                expect(new App().showHome).toBeDefined();
            });
        });
    });
});
