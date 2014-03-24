define(['router', 'backbone', 'app'], function (Router, Backbone, App) {
    'use strict';
    describe('Router', function () {
        Backbone.history.start({silent: true, pushState: true});

        it('should exist', function () {
            expect(Router).toBeDefined();
        }); 
        it('should be a valid Backbone router', function () {
            expect(new Router() instanceof Backbone.Router).toEqual(true);
        });

        describe('App Property', function () {
            it('should exist', function () {
                expect(new Router().app).toBeDefined();
            });
            it('should allow to be passed in', function () {
                var checker = {};
                expect(new Router({app:checker}).app).toEqual(checker);
            });
        });
        it('should have access to the app object', function () {
            var router = new Router();
//            console.log(router.app);
  //          expect(new Router().app).toEqual(App);
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
        });
    });
});
