define(['router', 'backbone'], function (Router, Backbone) {
    'use strict';
    describe('Router', function () {
        Backbone.history.start({silent: true, pushState: true});

        it('should exist', function () {
            expect(Router).toBeDefined();
        }); 
        it('should have an app associated with it', function () {
            expect(new Router().app).toBeDefined();
        });
        it('should have an app that is a view', function () {
            expect(new Router().app instanceof Backbone.View).toEqual(true);
        });
        it('should allow an APP to be passed in', function () {
            var app = {},
                router = new Router({app: app});

            expect(router.app).toEqual(app);
        });
        it('should be a valid Backbone router', function () {
            expect(new Router() instanceof Backbone.Router).toEqual(true);
        });

        describe('Home Route', function () {
            it('should exist', function () {
                expect(new Router().routes['']).toEqual('home'); 
            });
            it('fires the index route with a blank hash', function () {
                var router = new Router(),
                    route_spy = sinon.spy();

                router.bind('route:home', route_spy);
                router.navigate('', true);
                expect(route_spy.called).toEqual(true);
            });
            it('tells app, to show the homepage', function () {
                var app = {showHome: function () {}},
                    router = new Router({app: app});

                spyOn(router.app, 'showHome');

                router.home();
                expect(router.app.showHome).toHaveBeenCalled();
            });
        });
    });
});
